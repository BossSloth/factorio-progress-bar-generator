import { serve } from 'bun';
import index from './index.html';

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    '/*': index,
  },

  development: process.env.NODE_ENV !== 'production' && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,

    chromeDevToolsAutomaticWorkspaceFolders: true,
  },

  fetch(req) {
    // Serve static files from static directory
    const url = new URL(req.url);
    if (url.pathname.startsWith('/static/')) {
      return new Response(Bun.file(`.${url.pathname}`));
    }

    // Fallback to index.html for SPA routing
    return new Response(index.index, {
      headers: { 'Content-Type': 'text/html' },
    });
  },
});

console.log(`🚀 Server running at ${server.url}`);
