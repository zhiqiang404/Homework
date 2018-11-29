/* 
  1、显示数据库中的数据
  2、而且有样式上的区分
*/

let express = require('express');
let router = express.Router();

//获取暴露出来的dataModel
let dataModel = require("../bin/mongoose").dataModel;


/* 渲染模板*/
router.get('/', function (req, res, next) {
  //使用index.ejs模板
  //渲染多个怎么操作？ 放到对象中
  //有回调函数的方法都是异步的，因为异步，
  dataModel.find({}, function (err, docs) {
    let finished = [];
    let option=[];

    /* 代办放在最前面：改变数组排序，unshift在数组最前方的值前插入 */
    /* 原生JS的foreach，数组元素在前，索引i在后 */
    docs.forEach((e,i)=>{
      option.unshift(e);
    });
    console.log(option)

    docs.forEach((e, i) => {
      if (e.isFinished) {
        finished.push(e)
      }
    });

    res.render("index", {
      "docs": option,
      "all": docs.length,
      "finished": finished.length
    });
  });

  /* 脚部计数 */
  /* dataModel.count({}, function (err, count) {
    all = count;
  });
  dataModel.count({ "isFinished": true }, function (err, count) {
    finished = count;
  });
  dataModel.count({ "isFinished": false }, function (err, count) {
    unfinished = count;
  }); */

});



//？与 exports.XXX = XXX 的区别
module.exports = router; 