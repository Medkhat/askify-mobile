module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          components: './src/components',
          assets: './src/assets',
          screens: './src/screens',
          types: './src/types',
        },
      },
    ],
    'nativewind/babel',
  ],
};
