let express = require('express');
let router = express.Router();

let RestMsg = require('../../common/restmsg');
let TagService = require('../../service/tag/tagService');
let TagBO = require('../../service/tag/model/tagBO');

let _privateFun = router.prototype;

_privateFun.prsBO2VO = function (obj) {
    let result = obj.toObject({
        transform: function (doc, ret, options) {
            return {
                id: ret._id,
                username: ret.username,
                avatar: ret.avatar ? ret.avatar : null
            }
        }
    });
    return result;
}

router.route('/')
    .get(function (req, res, next) {
        let restmsg = new RestMsg();
        let query = {};
        let order = [['name', -1]];

        TagService.findAndOrder(query, order, function (err, obj) {
            if (err) {
                restmsg.errorMsg(err);
                res.send(restmsg)
                return 
            }
            restmsg.setResult(obj)
            res.send(restmsg)
            return
        })
    })

module.exports = router;
