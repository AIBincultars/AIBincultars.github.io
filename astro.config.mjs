import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aibincultars.github.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
  vite: {
    server: {
      // WSL does not reliably receive file-system events from Windows-mounted drives.
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
    // This site has no browser-side package imports, so dependency discovery
    // only adds cold-start work on the Windows-mounted WSL filesystem.
    optimizeDeps: {
      noDiscovery: true,
    },
  },
});
