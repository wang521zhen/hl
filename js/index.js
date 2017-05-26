$(document).ready(function(){
	$(".am-nav-pills li").click(function(){
 		if(!$(this).hasClass("am-dropdown")){
 			$(".am-nav-pills li[class!='am-dropdown am-active']").removeClass("am-active");
 			$(this).addClass("am-active");
 		}
 	});
	$("#container").load("main.html",function(){
		$.getScript("lib/assets/js/amazeui.min.js");
	});
});