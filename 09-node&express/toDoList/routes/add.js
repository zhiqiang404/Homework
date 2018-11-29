/* 
    添加一条新的信息
    格式: isFinished:false; content= "XXX"

    处理post请求: express依赖body-parse???
*/
var express = require('express');
var router = express.Router();

//获取暴露出来的dataModel
var dataModel = require("../bin/mongoose").dataModel;


/* 这里是router的post */
router.post("/", function (req, res) {
    //req.body
    if (req.body.inputText) {
        var inputText = req.body.inputText;
        console.log(inputText);
        // console.log(req.body);
        dataModel.create({
            isFinished: false,
            content: inputText
        }, function (err) {
            if (err) console.log(err);
        });

        /* express实现重定向 */
        res.redirect('/');
    }
    else{
        res.redirect('/');
    }

});

//一定要暴露router出去
module.exports = router;








