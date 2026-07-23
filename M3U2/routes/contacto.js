var express = require('express');
var router = express.Router();

/* GET contacto page. */
router.get('/', function(req, res, next) {
  res.render('contacto'); //*contacto.hbs
});

module.exports = router;
