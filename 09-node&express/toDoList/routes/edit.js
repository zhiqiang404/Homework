/* 
    1、处理post请求
    2、获取action中的id字符串
    3、执行数据库操作
*/
var express = require('express');
var router = express.Router();

//获取暴露出来的dataModel
var dataModel = require("../bin/mongoose").dataModel;

/* 这里是router的post */

/* router.post("/",function(req, res){
    res.end("hello");
}); */

router.post("/:itemId", function (req, res) {

    //req.params.itemId：获取action中的itemId
    var id = req.params.itemId;
    console.log(req.params)

    var body = req.body.editText;

    dataModel.findByIdAndUpdate(id, { $set: { "content": body } }, function (err, doc) {
       res.redirect("/") ;
    });
});

//一定要暴露router出去
module.exports = router;



