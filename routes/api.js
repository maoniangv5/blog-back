let express = require('express');
let router = express.Router();

let blog = require('./blog/blog');

router.use(function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   next();
});

router.use('/blog', blog);

module.exports = router;