let express = require('express');
let router = express.Router();
let axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test-integrations', function(req, res, next) {
  res.json({"response_type": "in_channel", "text": "mm integration server running."});
});

router.post('/ron-quote', ronQuote);

function ronQuote(req, res, next) {
  axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(function (response) {
    res.json({"response_type": "in_channel", "text": '"' + response.data[0] + '" - Ron Swanson'});
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = router;
