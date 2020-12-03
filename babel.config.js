require('regenerator-runtime/runtime');

module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
      },
    ],
  ],
  presets: ['@babel/preset-env', '@babel/react', 'next/babel'],
};
