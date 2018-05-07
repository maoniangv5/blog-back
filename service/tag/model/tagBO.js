
var mongoose = require('../../../db/db');

var tagSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    hot: {
        type: Number,
        default: 0
    },
    flag: {
        type: Boolean,
        default: false
    },
}, {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        },
        versionKey: false
    });

module.exports = mongoose.model('tags', tagSchema);
