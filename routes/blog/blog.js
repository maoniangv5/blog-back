let express = require('express');
let router = express.Router();

let RestMsg = require('../../common/restmsg');
let ParamCheck = require('../../common/paramcheck');
let BlogService = require('../../service/blog/blogService');

let _privateFun = router.prototype;

_privateFun.prsBO2VO = function (obj) {
    let result = obj.toObject({
        transform: function (doc, ret, options) {
            return {
            }
        }
    });
    return result;
}

router.route('/')
    .get(function (req, res, next) {
        let restmsg = new RestMsg();
        let query = {};
        // updatedAt倒叙，name正序排列
        let order = [{'updatedAt': -1, 'name': 1}];

        BlogService.findAndOrder(query, order, function (err, obj) {
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
    .post(function (req, res, next) {
        let restmsg = new RestMsg();

        let params = {
            require: {
                name: '类目名称'
            }
        };
        let paramsTmp = ParamCheck.composeParams(req, params);
        if (paramsTmp.err) {
            restmsg.errorMsg(paramsTmp.err);
            res.send(restmsg);
            return
        }

        BlogService.count(paramsTmp.query, function (err, count) {
            if (err) {
                restmsg.errorMsg(err);
                res.send(restmsg)
                return 
            }
            if (count !== 0) {
                restmsg.errorMsg('类目已存在！');
                res.send(restmsg)
                return 
            }
            BlogService.save(paramsTmp.query, function (err, obj) {
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
    })

router.route('/:id')
    .delete(function (req, res, next) {
        let restmsg = new RestMsg();
        let query = {
            _id: req.params.id
        }
        BlogService.remove(query, function (err, obj) {
            if (err) {
                restmsg.errorMsg(err);
                res.send(restmsg)
                return 
            }
            restmsg.setResult('')
            res.send(restmsg)
            return
        })
    })

module.exports = router;
