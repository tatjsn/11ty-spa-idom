const { resolve } = require('path');

module.exports = {
  build: {
    rollupOptions: {
      input: {
        css: resolve(__dirname, './css/main.css'),
      },
      output: {
        assetFileNames: () => '[name][extname]',
      },
    },
  },
};
