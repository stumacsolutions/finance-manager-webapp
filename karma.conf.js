module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    files: ['test/**/*.spec.js'],
    frameworks: ['chai', 'mocha', 'promise', 'riot', 'sinon'],
    preprocessors: { 'test/**/*.spec.js': ['webpack', 'sourcemap'] },
    reporters: ['progress'],
    webpack: require('./webpack.config.js')
  })
}
