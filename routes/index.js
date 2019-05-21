var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'G2-MDS Home' });
});

/* GET service page */
router.get('/service', function(req,res,next) {
  res.render('service', { title: 'Service'});
});

/* GET about page */
router.get('/about', function(req,res,next) {
  res.render('about', { title: 'About'});
});

module.exports = router;
