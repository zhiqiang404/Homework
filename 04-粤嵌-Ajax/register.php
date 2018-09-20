<?php
//	hearder('charset=utf-8');
	$username=$_POST['userName'];
	//模拟如果存在同名账户会怎么样
	if($username=='zhiqiang'){
		echo 'This user is already exit!';
	}
	else{
		//打印form标签POST方式传递的数据
		print_r($_POST);
		//打印input类型为file的方式保存的数据
		print_r($_FILES);
		//tmp_name是实际文件的存储路径，文件被保存在服务器缓存文件夹
		$filedata=$_FILES['img']['tmp_name'];
		$fileName=$_FILES['img']['name'];
		//‘C:\wamp64\tmp\php4C27.tmp ==> 'xxx/bbb.jpg'
		move_uploaded_file($filedata,'upload/'.$fileName);
		echo '欢迎'.$_POST['userName'].'<br><img width="200px" src="/upload/'.$fileName.'">';
	}
?>