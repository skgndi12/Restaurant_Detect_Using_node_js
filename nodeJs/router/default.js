var express = require('express')
var router = express.Router()
var app = express();

router.get('/', function (req, res) {
  console.log('GET/ index.html');
  res.render('index.html');
});

app.use(function(err, req, res, next) {
  if (err) {
    console.log(err);
  }
})
module.exports = router