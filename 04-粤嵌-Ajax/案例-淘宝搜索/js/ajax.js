$(function(){
	var pageNum=1;
	//等网页加载完成以后 加载第一页的数据
	ajaxGetImg(1);
	//给加载更多绑定一个事件
	$('#loadmore').click(function(){
		pageNum++;
		ajaxGetImg(pageNum);
	});
	//给window绑定滚动事件  当滚动到最后的时候自动加载
	$(window).scroll(function(){
		//Math.ceil() 向上取整
		var totalHeight=Math.ceil($(window).height()+$(window).scrollTop());
		if(totalHeight>=$(document).height()){
			pageNum++;
			ajaxGetImg(pageNum);
		}
	});
});

function ajaxGetImg(pageNum){
	$.post("waterflow.php",{page:pageNum},function(responseData){
				if(responseData.length==0){
					$('#loadmore').text('没有更多数据');
					return;
				}
				//循环服务器返回的json数组
				for(var i in responseData){
					//创建一个class="item" 的div并把它添加到 .items
					var  divItem=$('<div/>',{class:"item"}).appendTo('.items');
					//创建img标签 取出ajax返回的图片路径 添加到 div.item 里面
					$('<img/>',{src:responseData[i].path} ).appendTo(divItem);
					//创建p标签取出ajax返回的标题 添加到 div.item 里面
					$('<p/>').html(responseData[i].title).appendTo(divItem);
				}
				//等ajax数据组装成html完成以后 等图片加载完成以后 执行瀑布流
				$('img').on('load',function(){
					$('.items').waterflow();
				});

	},"json");
}
/*
function ajaxGetImg(pageNum){
	//通过ajax加载图片
		$.ajax({
			url:'waterflow.php',
			data:{page:pageNum},
			type:'get',
			dataType:'json',
			success:function(responseData){
				if(responseData.length==0){
					$('#loadmore').text('没有更多数据');
					return;
				}
				//循环服务器返回的json数组
				for(var i in responseData){
					//创建一个class="item" 的div并把它添加到 .items
					var  divItem=$('<div/>',{class:"item"}).appendTo('.items');
					//创建img标签 取出ajax返回的图片路径 添加到 div.item 里面
					$('<img/>',{src:responseData[i].path} ).appendTo(divItem);
					//创建p标签取出ajax返回的标题 添加到 div.item 里面
					$('<p/>').html(responseData[i].title).appendTo(divItem);
				}
				//等ajax数据组装成html完成以后 等图片加载完成以后 执行瀑布流
				$('img').on('load',function(){
					$('.items').waterflow();
				});
			},
			error:function(){
				alert('服务器错误!刷新重试!');
			}
		});
}*/