let express = require('express');
let router = express.Router();

let RestMsg = require('../../common/restmsg');
let ParamCheck = require('../../common/paramcheck');
let CommentService = require('../../service/comment/commentService');
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

router.route('/:type/:id')
    .put(function (req, res, next) {
        let restmsg = new RestMsg();
        let opt = req.body.hot ? req.body.hot : 0
        let query = {
            _id: req.params.id
        }
        if (req.params.type === 'comment') {
            CommentService.update(query, { $inc: { hot: Number(opt) } }, function (err, obj) {
                if (err) {
                    restmsg.errorMsg(err);
                    res.send(restmsg)
                    return
                }
                restmsg.setResult('')
                res.send(restmsg)
                return
            })
        } else if (req.params.type === 'blog') {
            BlogService.update(query, { $inc: { hot: Number(opt) } }, function (err, obj) {
                if (err) {
                    restmsg.errorMsg(err);
                    res.send(restmsg)
                    return
                }
                restmsg.setResult('')
                res.send(restmsg)
                return
            })
        } else {
            restmsg.errorMsg('路由错误！')
            res.send(restmsg)
            return
        }        
    })

module.exports = router;
