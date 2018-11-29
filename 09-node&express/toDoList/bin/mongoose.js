/* 
    目的：一次连接，多次复用
*/
let express = require('express');
let router = express.Router();

let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/toDoList";

mongoose.connect(url);
mongoose.connection.once("open", function () {
  console.log("connected");
});

//新建一个新的Schema
let Schema = mongoose.Schema;
let dataSchema = new Schema({
    isFinished:{
        type:Boolean,
        default:false
    },
    content:String
});

//mongoose通过model操作（不存在表，则创建新表），新表默认带s；这里创建的是datas
let dataModel = mongoose.model("datas", dataSchema);

/*  */
exports.dataModel = dataModel;

