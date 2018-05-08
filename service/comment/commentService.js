
let Comment = require('./model/commentBO');
let ServiceGenerator = require('../../common/serviceGenerator');

let CommentService = ServiceGenerator.generate(Comment, '_id');

module.exports = CommentService;
