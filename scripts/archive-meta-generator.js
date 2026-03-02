'use strict';

function stripHtml(value) {
  return String(value || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeRoute(value) {
  return decodeURIComponent(String(value || ''))
    .replace(/^https?:\/\/[^/]+/i, '')
    .replace(/index\.html$/i, '')
    .replace(/\/+$/, '')
    .replace(/^$/, '/');
}

hexo.extend.generator.register('archives-meta', locals => {
  const posts = locals.posts.sort('-date').toArray().map(post => {
    const permalinkPath = post.permalink
      ? new URL(post.permalink).pathname
      : `/${post.path || ''}`;
    const summary = stripHtml(post.description || post.excerpt).slice(0, 72);

    return {
      url: normalizeRoute(permalinkPath),
      title: post.title || '',
      categories: post.categories.toArray().map(item => item.name),
      tags: post.tags.toArray().map(item => item.name),
      summary
    };
  });

  return [{
    path: 'archives-meta.json',
    data: JSON.stringify({ posts }, null, 2)
  }, {
    path: 'js/archives-meta.js',
    data: `window.__ARCHIVE_META__ = ${JSON.stringify({ posts })};`
  }];
});
