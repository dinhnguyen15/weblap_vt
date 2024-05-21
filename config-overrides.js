const { override, addWebpackAlias, addBabelPlugins } = require('customize-cra');
const path = require('path');

module.exports = override(
   ...addBabelPlugins(
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
   ),
   addWebpackAlias({
      '~': path.resolve(__dirname, 'src'),
   }),
);
