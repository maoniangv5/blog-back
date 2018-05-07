
let Category = require('./model/categoryBO');
let ServiceGenerator = require('../../common/serviceGenerator');

let CategoryService = ServiceGenerator.generate(Category, '_id');

module.exports = CategoryService;
