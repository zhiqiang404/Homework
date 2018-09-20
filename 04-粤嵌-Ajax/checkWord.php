<?php
$username=$_GET['name'];
if($username=='admin'){
	echo 0;
}else{
	echo 'GET方式返回正常'.$_GET['name'];
}

