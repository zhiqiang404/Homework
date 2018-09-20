$.post('http://192.168.15.2/gz0820web/users', 'page=1', function (data) {
    /* data.data[0].id */
    
    for(var i=0;i<5;i++){
        var tr=$('</tr>');
        for(var j=0;j<5;j++){
            /* tr>td*n */
            var td=$('</td>');
            td.text(data.data[i].id);
            td.appendTo(tr);
        }
        tr.appendTo($('tbody').)
    }
    
    


}, 'json');

/* 用户名 密码 年龄 性别 */
/* { "total": 40, 
"per_page": 5, 
"current_page": 1,
 "last_page": 8, 
 "data": 
 [{ "id": 1, 
 "username": "admin",
  "password": "admin", 
  "age": 20,
   "gender": "1", 
   "headimg": "a.jpg" }, 
   { "id": 2, 
   "username": "test",
    "password": "ddd",
     "age": null, 
     "gender": "2", 
     "headimg": "admin" },

      { "id": 3, "username":
       "hello", "password": "admin", "age": 20, "gender": "1", "headimg": "a.jpg" }, { "id": 4, "username": "word", "password": "admin", "age": 20, "gender": "2", "headimg": "a.jpg" }, { "id": 5, "username": "chen", "password": "admin", "age": 20, "gender": "2", "headimg": "a.jpg" }] } */