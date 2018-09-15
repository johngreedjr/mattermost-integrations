var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test-integrations', function(req, res, next) {
  res.json({"response_type": "in_channel", "text": "mm integration server running."});
});

module.exports = router;
