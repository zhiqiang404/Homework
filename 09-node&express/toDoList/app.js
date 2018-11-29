//1、加载模块
var express = require('express');
var path = require('path');


/* 3、创建express实例 */
var app = express();

/* 4、为处理post请求准备（两种方式） */
/* var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
})); */
app.use(express.urlencoded({
  extended: false
}));

//4、引入路由；路由文件导出了他们的路由实例
var indexRouter = require('./routes/index');
var addRouter = require('./routes/add')
var finishRouter = require('./routes/finish');
var editRouter = require('./routes/edit');
var deleteRouter = require('./routes/delete');


//5、设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//6、开放资源文件夹
app.use(express.static(path.join(__dirname, 'public')));


//7、、注册路由
//一定要在对应的路由写 module.exports = router; 
app.use('/', indexRouter);
app.use('/add', addRouter);
app.use('/finish', finishRouter);
app.use('/edit', editRouter);
app.use('/delete', deleteRouter);

//8、启动服务
app.listen(8080, function (err) {
  if (err) throw err;
  console.log("8080");
});
