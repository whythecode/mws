const kue = require('kue');
const config = require('../config/queue');

const queue = kue.createQueue({
  prefix: config.options.prefix,
  redis: {
    host: config.host
  }
});

module.exports = {
  createJob: function (jobName, data) {

    return new Promise(function (resolve, reject) {

      queue.create(jobName, data).save(function (err) {

        if (err) {
          console.log(err);
          return reject(err);
        }

        return resolve();
      });
    });
  }
};
