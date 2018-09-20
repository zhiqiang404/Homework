//定义一个jquery插件
(function($){
	$.fn.extend({
		waterflow:function(){
			//获取整个容器宽度
			var boxWidth=this.width();
			//获取每个里面每个item的宽度 outerWidth()获取元素宽度包含width+padding+border
			var items=this.find('.item');
			var itemWidth=items.outerWidth();
			//定义每行显示5个
			var itemNum=5;
			//计算每个item之间的间隙
			var space=(boxWidth-(itemWidth*itemNum))/(itemNum-1);
			//定义一个数组用来存储5列的高度值
			var itemArray=[];
			//循环每个item出来
			items.each(function(index,el){
				//判断最前面的5个项距离上面是0
				if(index<itemNum){
					//计算第一行5个item的距离左边距离
					/*
						距离左边的距离=下标 *  (item元素宽度 + 间隙)
					*/
					var left=index*(itemWidth+space);
					//记录前面5个元素的高度
					itemArray[index]=$(el).outerHeight();
					$(el).css({
						top:0,
						left:left
					});
				}else{
					//找出前面5个item里面高度最小的那个
					//假设第一个最小的
					var  minHeight=itemArray[0];
					var minIndex=0;
					for(var i in itemArray){
						//判断有没有比我假设第一个还小的item如果有记录下来
						if(minHeight>itemArray[i]){
							minHeight=itemArray[i];
							minIndex=i;
						}
					}
					var height=$(el).outerHeight();
					//把最小的这个元素的高度加上现在要加入的元素的高度作为这一列的高度
					itemArray[minIndex]=minHeight+height+space;
					//设置当前元素的位置
					$(el).css({
						top:minHeight+space,
						left:minIndex*(itemWidth+space)
					});
				}
			});
			//查询最高的高度
			var maxHeight=0;//假设最高的高度为0
			for(var j in itemArray){
				//判断有没有比最高高度还高的值 如果有记录下来 继续查找
				if(maxHeight<itemArray[j]){
					maxHeight=itemArray[j];
				}
			}
			//设置容器的高度为最高的值
			this.height(maxHeight);
		}
	});
})(jQuery);
/*//等网页记载完成以后执行 等网页dom加载就立即执行
$(function(){
		
});
//等网页加载完成以后执行 包含要等图片 等所有需要加载的东西加载完成以后才执行
window.onload=function(){
	
	// $('.items').waterflow();

}
// $(window).on('load',function(){
// 	$('.items').waterflow();
// })*/

