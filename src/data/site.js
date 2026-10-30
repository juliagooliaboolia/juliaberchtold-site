// One place for links and contact details.
export const EMAIL = 'julia.a.berchtold@gmail.com';
export const INSTAGRAM = { handle: '@juju.bee', url: 'https://www.instagram.com/juju.bee/' };
export const INSTAGRAM_STUDIO = { handle: '@juju.bee.studio', url: 'https://www.instagram.com/juju.bee.studio/' };
export const ARCHIVE_URL = 'https://archive.juliaberchtold.com/ilbelviaggio';

// Join the deploy base path (e.g. /juliaberchtold-site) with a site path.
export const u = (p = '') => {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return base + '/' + String(p).replace(/^\//, '');
};
