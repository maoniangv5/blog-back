let express = require('express');
let router = express.Router();

let RestMsg = require('../../common/restmsg');
let ParamCheck = require('../../common/paramcheck');
let CommentService = require('../../service/comment/commentService');

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
        let query = req.query;
        // updatedAt倒叙排列
        let order = [{ 'updatedAt': -1 }];

        CommentService.findAndOrder(query, order, function (err, obj) {
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
                content: '评论内容',
                blog_id: '文章ID',
                uniq_id: 'UNIQ ID'
            }
        };
        let paramsTmp = ParamCheck.composeParams(req, params);
        if (paramsTmp.err) {
            restmsg.errorMsg(paramsTmp.err);
            res.send(restmsg);
            return
        }

        CommentService.save(paramsTmp.query, function (err, obj) {
            if (err) {
                restmsg.errorMsg(err);
                res.send(restmsg)
                return
            }
            if (!obj.root_pre_id) {
                CommentService.update(obj, { root_pre_id: obj._id }, function (err, ret) {
                    if (err) {
                        console.log(err)
                    }
                })
            }
            restmsg.setResult(obj)
            res.send(restmsg)
            return
        })
    })

router.route('/hot')
    .get(function (req, res, next) {
        let restmsg = new RestMsg();
        let query = req.query;
        // hot倒叙排列
        let order = [{ 'hot': -1 }];

        CommentService.findAndOrder(query, order, function (err, obj) {
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

router.route('/:id')
    .put(function (req, res, next) {
        let restmsg = new RestMsg();
        let query = {
            _id: req.params.id
        }

        CommentService.update(query, req.body, function (err, obj) {
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
    .delete(function (req, res, next) {
        let restmsg = new RestMsg();
        let query = { $or: [{ _id: req.params.id }, { root_pre_id: req.params.id }] }

        CommentService.update(query, { "flag": true }, function (err, obj) {
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
