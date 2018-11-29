/* 
    点击按钮，增加删除线；
    修改指定位置的isFinished
    格式: isFinished:false; content= "XXX"

    处理post请求
*/
var express = require('express');
var router = express.Router();

//获取暴露出来的dataModel
var dataModel = require("../bin/mongoose").dataModel;

/* 这里是router的post */
router.post("/", function (req, res) {
    var id = req.body.finishText;
    console.log(req.body.finishText)

    dataModel.find({ "_id": id }, function (err, doc) {
        //找的是一个表，不问文档
        if (doc[0].isFinished) {
            console.log('run')
            doc[0].isFinished = false;
            doc[0].save();
            res.redirect("/");
        } else {
            doc[0].isFinished = true;
            doc[0].save();
            res.redirect("/");
        }
    })
});

//一定要暴露router出去
module.exports = router;








