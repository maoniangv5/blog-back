
var mongoose = require('../../../db/db');

var fileSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    eTitle: {
        type: String
    },
    category: {
        type: String,
        require: true
    },
    tag: {
        type: Array
    },
    cover: {
        type: String
    },
    flag: {
        type: Boolean,
        default: false
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    isComment: {
        type: Boolean,
        default: true
    },
    hot: {
        type: Number,
        default: 0
    },
    read: {
        type: Number,
        default: 0
    }
}, {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        },
        versionKey: false
    });

module.exports = mongoose.model('files', fileSchema);
