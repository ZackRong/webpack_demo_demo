module.exports = {
  plugins: [
    ['@babel/plugin-transform-runtime', {
      helpers: true,
      corejs: 3
    }]
  ],
  presets: [
    ['@babel/preset-env']
  ]
};
