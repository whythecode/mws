$(function () {

  var $result = $('#result');

  $('#order').submit(function (e) {

    e.preventDefault();

    var data = $(this).serializeArray().reduce(function (map, field) {

      map[field.name] = field.value;

      return map;
    }, {});

    var start = new Date();

    $.ajax({
      type: 'POST',
      url: '/api/checkout/order',
      data: JSON.stringify(data, undefined, 2),
      contentType: 'application/json'
    }).done(function (data, status, res) {

      res.responseTime = ((new Date()) - start) + 'ms';

      $result.html(JSON.stringify(res, undefined, 2));
    });
  });
});
