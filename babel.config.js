
const path = require('path');

module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: path.resolve(__dirname, process.env.ENVFILE || '.env'),
        safe: false,
        allowUndefined: true,
      },
    ],
    'react-native-reanimated/plugin'
  ]
  ,
};
