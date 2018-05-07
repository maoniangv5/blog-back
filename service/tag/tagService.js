
let Tag = require('./model/btagBO');
let ServiceGenerator = require('../../common/serviceGenerator');

let TagService = ServiceGenerator.generate(BlTagog, '_id');

module.exports = TagService;
