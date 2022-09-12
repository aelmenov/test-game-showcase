module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: process.env.NODE_ENV === 'production' ? [] : [ 'react-refresh/babel' ],
};