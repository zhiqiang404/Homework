var next = document.getElementById("next");
var prev = document.getElementById("prev");



//var slider = document.getElementById("slider");
var slider = document.getElementsByClassName("slider");
var imgs = slider[0].getElementsByTagName("img");

var i = 0;
next.onclick = function () {
//	alert("xxx");
	i++;
	if (i > imgs.length-1) {
		i = 0;
	}
	console.log(i);
	
//	imgs[0].style.opacity = "0";
//	imgs[1].style.opacity = "0";
//	imgs[2].style.opacity = "0";
//	imgs[3].style.opacity = "0";
	for (var j = 0; j < imgs.length; j++) {
		imgs[j].style.opacity = "0";
	}
	
	imgs[i].style.opacity = "1";
}
prev.onclick = function () {
	i--;
	if (i < 0 ) {
		i = imgs.length-1;
	}
	
	for (var j = 0; j < imgs.length; j++) {
		imgs[j].style.opacity = "0";
	}
	
	imgs[i].style.opacity = "1";
}
var sliderPagination = document.getElementsByClassName("slider-pagination");
var sliderPaginationItem = sliderPagination[0].getElementsByTagName("i");

//sliderPaginationItem[0].onclick = function () {
//	
//}

for (var k = 0; k < sliderPaginationItem.length; k++) {
	sliderPaginationItem[k].onclick = function () {
//		console.log(k); 当点击的时候for早就执行完成
		console.log(this);
		// this指代的是当前触发事件的元素
//		console.log(sliderPaginationItem.indexOf(this))
	}
	console.log(k);
}
