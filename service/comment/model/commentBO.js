
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
    chain_id: {
        type: String
    },
    pre_id: {
        type: String,
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
