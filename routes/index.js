var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'G2-MDS' });
});

/* GET Service page */
router.get('/service', function(req,res,next) {
  res.render('service', { title: 'Service'});
});

/* GET Contact page */
router.get('/contact', function(req,res,next) {
  res.render('contact', { title: 'Contact Us'});
});

/* GET About page */
router.get('/about', function(req,res,next) {
  res.render('about', { title: 'About Us'});
});

module.exports = router;
