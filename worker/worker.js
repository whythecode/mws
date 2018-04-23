const kue = require('kue');

const queue = kue.createQueue({
  prefix: process.env.QUEUE_PREFIX,
  redis: {
    host: process.env.REDIS_HOST
  }
});

kue.app.listen(80);



queue.process('email', 4, function (job, done) {

  email(job.data.email, job.data.body, job, done);
});


queue.process('payment', 4, function (job, done) {

  payment(job.data.email, job.data.price, job.data.provider, job, done);
});



function email (address, body, job, done) {

  if (!address || !body) {

    return done(new Error('missing info'));
  }

  job.log('Email sent to %s with params: %s', address, JSON.stringify(body));

  done();
}


function payment (address, price, provider, job, done) {

  if (!address || !price || !provider) {

    return done(new Error('missing info'));
  }

  job.log('Processed %s payment for %s costing %s', provider, address, price);

  done();
}



process.once('SIGTERM', function (sig) {

  queue.shutdown(5000, function (err) {

    console.log('Kue shutdown: ', err || '');

    process.exit(0);
  });
});
