module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/riff-chunks.js'
  },
  module: {
    loaders: [
      {
        test:  /index\.js$/,
        loader: 'string-replace-loader',
        query: {
          multiple: [
            {
              search: 'module.exports.getChunks',
              replace: "window['getChunks']"
            }
          ]
        }
      }
    ]
  }
};