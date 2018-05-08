
var mongoose = require('../../../db/db');

var commentSchema = mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    blog_id: {
        type: String,
        require: true  
    },
    content_chain: {
        type: String,
        default: null
    },
    pre_id: {
        type: String,
        default: null
    },
    root_pre_id: {
        type: String,
        default: null
    },
    uniq_id: {
        type: String,
        require: true    
    },
    nick: {
        type: String,
        default: 'max4a'
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

module.exports = mongoose.model('comments', commentSchema);
