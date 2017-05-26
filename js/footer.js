$(document).ready(function(){
	if($(".footer-public")[0] && $(".footer-public").html() == ''){
		var footer = $(".footer-public");
		footer.append('<div data-am-widget="gotop" class="am-gotop am-gotop-fixed">'+
							'<a href="#top" title="回到顶部">'+
								'<span class="am-gotop-title">回到顶部</span>'+
								'<i class="am-gotop-icon am-icon-chevron-up"></i>'+
							'</a>'+
						'</div>'+
						'<div class="content">'+
							'<ul class="am-avg-sm-2 am-avg-md-2 am-avg-lg-2 am-thumbnails">'+
								'<li>'+
									'<a href="#">联系我们</a>'+
								'</li>'+
								'<li>'+
									'<a href="#">加入我们</a>'+
								'</li>'+
							'</ul>'+
							'<p>感谢您的关注<br>© 尽心尽力	精益求精.</p>'+
						'</div>');
	}
});