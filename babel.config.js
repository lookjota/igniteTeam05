module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module-resolver',
        {
          root: ['./app'],
          alias: {
            '@assets': './app/assets',
            '@components': './app/components',
            '@routes': './app/routs',
            '@screens': './app/screens',
            '@storage': './app/storage',
            '@theme': './app/theme',
            '@utils':'./app/utils'
          }
        }
      ]
  };
};
