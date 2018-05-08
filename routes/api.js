let express = require('express');
let router = express.Router();

let blog = require('./blog/blog');
let category = require('./category/category');
let tag = require('./tag/tag');
let comment = require('./comment/comment');

router.use('/blog', blog);
router.use('/category', category);
router.use('/tag', tag);
router.use('/comment', comment);

module.exports = router;