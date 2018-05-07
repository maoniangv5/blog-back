
let Tag = require('./model/tagBO');
let ServiceGenerator = require('../../common/serviceGenerator');

let TagService = ServiceGenerator.generate(Tag, '_id');

module.exports = TagService;
