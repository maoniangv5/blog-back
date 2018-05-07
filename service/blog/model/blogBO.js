
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
        type: Array,
        require: true
    },
    tag: {
        type: Array
    },
    cover: {
        type: String,
        default: 'cover'
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
    comment: {
        type: Array
    },
    stars: {
        type: Number,
        default: 0
    },
    deStars: {
        type: Number,
        default: 0
    },
    read: {
        type: Number,
        default: 0
    },
    des: {
        type: String
    }
}, {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        },
        versionKey: false
    });

module.exports = mongoose.model('files', fileSchema);
