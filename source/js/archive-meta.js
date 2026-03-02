'use strict';

(function () {
  function normalizeRoute(value) {
    return decodeURIComponent(String(value || ''))
      .replace(/^https?:\/\/[^/]+/i, '')
      .replace(/index\.html$/i, '')
      .replace(/\/+$/, '')
      .replace(/^$/, '/');
  }

  function createNoteItem(className, icon, text) {
    const span = document.createElement('span');
    span.className = `archive-note-item ${className}`;
    span.innerHTML = `<i class="fa ${icon}" aria-hidden="true"></i><span>${text}</span>`;
    return span;
  }

  function initArchiveMeta() {
    if (!document.body.classList.contains('archive')) return;
    var root = (window.CONFIG && window.CONFIG.root) || '/';
    if (!root.endsWith('/')) root += '/';

    fetch(root + 'archives-meta.json')
      .then(res => res.ok ? res.json() : Promise.reject(new Error('No archives meta')))
      .then(data => {
        const postMap = new Map((data.posts || []).map(post => [normalizeRoute(post.url), post]));
        const articles = document.querySelectorAll('.archive.posts-collapse article');

        articles.forEach(article => {
          if (article.querySelector('.archive-post-note')) return;

          const link = article.querySelector('.post-title-link');
          if (!link) return;

          const post = postMap.get(normalizeRoute(link.getAttribute('href')));
          if (!post) return;

          const container = document.createElement('div');
          container.className = 'archive-post-note';

          const categoriesText = `分类：${post.categories && post.categories.length ? post.categories.join(' / ') : '未分类'}`;
          const tagsText = `标签：${post.tags && post.tags.length ? post.tags.join(' · ') : '无标签'}`;
          container.appendChild(createNoteItem('archive-note-category', 'fa-folder-open-o', categoriesText));
          container.appendChild(createNoteItem('archive-note-tag', 'fa-tags', tagsText));

          if (post.summary) {
            container.appendChild(createNoteItem('archive-note-summary', 'fa-commenting-o', post.summary));
          }

          const header = article.querySelector('.post-header');
          if (header) header.appendChild(container);
        });
      })
      .catch(() => {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArchiveMeta);
  } else {
    initArchiveMeta();
  }
})();
