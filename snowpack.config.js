// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
  },
  plugins: [
    [
      'copy-ui-plugin',
      {
        html: 'ui/src/lib/Main.svelte',
        css: 'ui/src/app.css',
      },
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    out: 'dist',
    /* ... */
  },
  exclude: ['**/node_modules/**/*', 'ui/**/*', 'dist/**/*'],
};
