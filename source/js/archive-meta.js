'use strict';

(function () {
  function normalizeRoute(value) {
    const input = String(value || '');
    try {
      return decodeURIComponent(input)
        .replace(/^https?:\/\/[^/]+/i, '')
        .replace(/index\.html$/i, '')
        .replace(/\/+$/, '')
        .replace(/^$/, '/');
    } catch {
      return input
        .replace(/^https?:\/\/[^/]+/i, '')
        .replace(/index\.html$/i, '')
        .replace(/\/+$/, '')
        .replace(/^$/, '/');
    }
  }

  function createNoteItem(className, icon, text) {
    const span = document.createElement('span');
    span.className = `archive-note-item ${className}`;
    span.innerHTML = `<i class="fa ${icon}" aria-hidden="true"></i><span>${text}</span>`;
    return span;
  }

  function initArchiveMeta() {
    const archiveRoot = document.querySelector('.main-inner.archive.posts-collapse');
    if (!archiveRoot) return;

    const data = window.__ARCHIVE_META__;
    if (!data || !Array.isArray(data.posts)) return;

    const postMap = new Map((data.posts || []).map(post => [normalizeRoute(post.url), post]));
    const articles = archiveRoot.querySelectorAll('article');

    articles.forEach(article => {
      if (article.querySelector('.archive-post-note')) return;

      const link = article.querySelector('.post-title-link');
      if (!link) return;

      const post = postMap.get(normalizeRoute(link.getAttribute('href')));
      if (!post) return;

      const categoriesText = `Category: ${post.categories && post.categories.length ? post.categories.join(' / ') : 'None'}`;
      const tagsText = `Tags: ${post.tags && post.tags.length ? post.tags.join(' · ') : 'None'}`;

      const container = document.createElement('div');
      container.className = 'archive-post-note';
      container.appendChild(createNoteItem('archive-note-category', 'fa-folder-open-o', categoriesText));
      container.appendChild(createNoteItem('archive-note-tag', 'fa-tags', tagsText));

      if (post.summary) {
        container.appendChild(createNoteItem('archive-note-summary', 'fa-commenting-o', post.summary));
      }

      const header = article.querySelector('.post-header');
      if (header) header.appendChild(container);
    });
  }

  initArchiveMeta();
  document.addEventListener('DOMContentLoaded', initArchiveMeta);
  document.addEventListener('pjax:success', initArchiveMeta);
})();
