const express = require('express');
const queue = require('../utils/queue');

const router = express.Router();

router.post('/order', function (req, res, next) {

  const body = req.body;
  const email = body.email;

  queue.createJob('email', {
    title: `Order confirmation email for ${email}`,
    email: email,
    body: body
  });

  queue.createJob('payment', {
    title: `Payment for ${email}`,
    email: email,
    price: body.price,
    provider: body.provider
  });

  res.json({ success: true, data: body });
});

module.exports = router;
