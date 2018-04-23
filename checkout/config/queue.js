const requireEnv = require('../utils/require-env');

module.exports = {
  host: requireEnv('REDIS_HOST'),
  options: {
    prefix: requireEnv('QUEUE_PREFIX')
  }
};
