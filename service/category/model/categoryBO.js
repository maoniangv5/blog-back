
var mongoose = require('../../../db/db');

var categorySchema = mongoose.Schema({
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

module.exports = mongoose.model('categorys', categorySchema);
