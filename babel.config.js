module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          screens: './src/screens',
          components: './src/components',
          navigation: './src/navigation',
          theme: './src/theme',
          utils: './src/utils',
        },
      },
    ],
  ],
};
