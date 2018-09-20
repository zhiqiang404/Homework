$.post('http://192.168.15.2/gz0820web/users', 'page=1', function (data) {
    /* data.data[0].id */
    for(var i=0;i<5;i++){
        /* tr>td*n */
        $('</tr>').appendTo($('#tData'));
    }



}, 'json');

{ "total": 40, 
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
       "hello", "password": "admin", "age": 20, "gender": "1", "headimg": "a.jpg" }, { "id": 4, "username": "word", "password": "admin", "age": 20, "gender": "2", "headimg": "a.jpg" }, { "id": 5, "username": "chen", "password": "admin", "age": 20, "gender": "2", "headimg": "a.jpg" }] }