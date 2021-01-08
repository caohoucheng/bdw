// 中奖轮播
// var time = 2000; //
// var time = setInterval(function() {
// 	//添加top动画
// 	$('.roundItem').animate({
// 		top: -35
// 	}, 1000, function() { //45为元素高
// 		//将第一个元素放到末尾    
// 		$('.roundItem').find("li:first").insertAfter($('.roundItem').find("li:last"));
// 		//top改为0
// 		$('.roundItem').css({
// 			"top": 0
// 		});
// 	});
// }, time);

function loop(){
	var time = 0; //
	var time = setTimeout(function() {
		//添加top动画
		var l=parseInt($('.roundItem li').eq(0).css('margin-left'))-1;
		$('.roundItem li').eq(0).css('margin-left',l)
		loop();
	}, 20);
}
loop()



// 关闭返回--通用
$('.close').click(function() {
	window.location.href = 'index.html'
})
$('.back').click(function() {
	history.go(-1)
})

// 获取随机数
var GetRandomNum = function(Min, Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	return (Min + Math.round(Rand * Range));
}
