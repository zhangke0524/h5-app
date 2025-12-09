module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375, // 设计稿宽度
        unitPrecision: 3,
        viewportUnit: 'vw',
        selectorBlackList: ['ignore'],
        minPixelValue: 1,
        mediaQuery: false,
      },
    },
  };
  