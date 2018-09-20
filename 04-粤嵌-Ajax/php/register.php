<?php
//	hearder('charset=utf-8');
	/* 从服务器内存中，找出post方式传递的、name伪userName的数据 */
	$username=$_POST['userName'];
	if($username=='zhiqiang'){
		echo 'This user is already exit!';
	}
	else{
		//打印form标签POST方式传递的数据
		print_r($_POST);
		print_r('<br>');
		//打印input类型为file的方式保存的数据
		print_r($_FILES);
		//tmp_name是实际文件的存储路径，文件被保存在服务器缓存文件夹
		$filedata=$_FILES['img']['tmp_name'];
		$fileName=$_FILES['img']['name'];
		//‘C:\wamp64\tmp\php4C27.tmp ==> 'xxx/bbb.jpg'
		move_uploaded_file($filedata,'../upload/'.$fileName);
		/* 返回用户名、图片 */
		echo '<br>欢迎'.$_POST['userName'].'<br><img width="200px" src="../upload/'.$fileName.'">';
	}
?>