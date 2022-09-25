const { resolve } = require('path');

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './js/main.js'),
        css: resolve(__dirname, './css/main.css'),
      },
      output: {
        entryFileNames: () => '[name].js',
        assetFileNames: () => '[name][extname]',
      },
    },
  },
};
