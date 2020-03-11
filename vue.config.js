module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  }
  // resolve: {
  //   extensions: ['.js', '.vue', '.json'],
  //   alias: {
  //     '@': resolve('src')
  //   }
  // }
};
