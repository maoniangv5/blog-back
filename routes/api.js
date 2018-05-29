let express = require('express');
let router = express.Router();

let blog = require('./blog/blog');
let category = require('./category/category');
let tag = require('./tag/tag');
let comment = require('./comment/comment');
let hot = require('./hot/hot');

router.use('/blog', blog);
router.use('/category', category);
router.use('/tag', tag);
router.use('/comment', comment);
router.use('/hot', hot);

module.exports = router;