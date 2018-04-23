const requireEnv = require('../utils/require-env');

module.exports = {
  server: {
    port: process.env.PORT || '80'
  }
};
