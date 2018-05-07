
let Blog = require('./model/blogBO');
let ServiceGenerator = require('../../common/serviceGenerator');

let BlogService = ServiceGenerator.generate(Blog, '_id');

module.exports = BlogService;
