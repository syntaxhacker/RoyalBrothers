module.exports = {
    configureWebpack: {
      // other webpack options to merge in ...
    },
    // devServer Options don't belong into `configureWebpack`
    devServer: {
      host: process.env.HOST,
      port: "8080",
      disableHostCheck: true,
      hot: true,
      watchContentBase: true,
    compress: true,
    },
  };