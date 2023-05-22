const fs = require('fs').promises;
module.exports = function (snowpackConfig, pluginOptions) {
  // pluginOptions eg. { html: 'ui/src/main.html', css: 'ui/src/app.css'
  return {
    name: 'copy-ui-plugin',
    async transform({ contents, fileExt, filePath }) {
      console.log('filePath', filePath);
      if (fileExt === '.js') {
        // Read the contents of the HTML and CSS files
        const html = await fs.readFile(pluginOptions.html, 'utf-8');
        const css = await fs.readFile(pluginOptions.css, 'utf-8');
        console.log('html', html.length);
        console.log('css', css.length);
        // Replace the placeholders with the actual contents of the HTML and CSS files
        contents = contents.replace(/{% HTML %}/g, html).replace(/{% CSS %}/g, css);
      }
      return { contents, fileExt };
    },
    config(snowpackConfig) {
      // Add the HTML and CSS files to Snowpack's mount configuration so they get watched for changes
      snowpackConfig.mount[pluginOptions.html] = { url: '/', static: true, resolve: false };
      snowpackConfig.mount[pluginOptions.css] = { url: '/', static: true, resolve: false };

      return snowpackConfig;
    },
  };
};
