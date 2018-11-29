/* 
    点击按钮，删除数据

    处理post请求
*/
var express = require('express');
var router = express.Router();

//获取暴露出来的dataModel
var dataModel = require("../bin/mongoose").dataModel;

/* 这里是router的post */
router.post("/", function (req, res) {
    var id = req.body.deleteText;
    console.log(req.body.deleteText)
    
    dataModel.deleteOne({"_id": id}, function(err){
        if(!err) console.log("删除成功");
    })
    //重定向
    res.redirect("/");
});

//一定要暴露router出去
module.exports = router;





