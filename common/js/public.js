$(document).ready(function(){
	$(".nav-pill>li").click(function(){
		if(!$(this).hasClass("active")){
			$(".nav-pill>li").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(".nav-pill>li").hover(function(){
		$(this).addClass("active-now");
	},function(){
		$(this).removeClass("active-now");
	});
});