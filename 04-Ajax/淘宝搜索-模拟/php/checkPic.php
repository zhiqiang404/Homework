<?php
/*原有思路：前台送来链接，后台送还链接*/
/*现在的思路：传图片到服务器缓存，序列化存储后将路径传回前端*/
$imgSrc=$_FILES['x']['name'];
move_uploaded_file($_FILES['x']['tmp_name'],'../img/'.$_FILES['x']['name']);
echo '../img/'.$_FILES['x']['name'];
