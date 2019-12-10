var express = require('express');
var router = express.Router();
var Hobby = require('../models/hobby');

/* GET home page. */
router.get('/', function(req, res, next) {
  Hobby.find({}, function(err, hobbies) {
    res.render('index', { title: 'Hobbies Page', hobbies });
  })
});

module.exports = router;
