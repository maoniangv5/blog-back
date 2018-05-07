let express = require('express');
let router = express.Router();

let blog = require('./blog/blog');
let category = require('./category/category');
let tag = require('./tag/tag');

router.use(function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   next();
});

router.use('/blog', blog);
router.use('/category', category);
router.use('/tag', tag);

module.exports = router;