//amazeui.min.js
$(document).ready(function(){
	var way = "";
	var path = getRootPath_web("pathName").replace("/", "").replace("/", "");
	if(path != null && path.indexOf("/") > -1) {
		for(; path.indexOf("/") > -1;) {
			path = path.replace("/", "");
			way += "../";
		}
	}
	if($(".header-public")[0] && $(".header-public").html() == ''){
		var header = $(".header-public");
		header.addClass("am-topbar");
		header.addClass("am-topbar-fixed-top");
		header.addClass("wos-header");
		header.append("<div class='am-container'></div>");
		var cont = header.children();
		cont.append('<h1 class="am-topbar-brand">'+
		            '<a href="#"><img src="img/logo.png" alt="">南京汇隆营销策划有限公司</a>'+
		       '</h1>');
	  	cont.append('<button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-warning '+
	  				'am-show-sm-only" data-am-collapse="{target: \'#collapse-head\'}">'+
		            '<span class="am-sr-only">导航切换</span>'+
		            '<span class="am-icon-bars"></span>'+
		        	'</button>');     
		cont.append('<div class="am-collapse am-topbar-collapse" id="collapse-head">'+
						'<ul class="am-nav am-nav-pills am-topbar-nav">'+
							'<li class="am-active">'+
								'<a href="'+way+'index.html">首页</a>'+
							'</li>'+
							'<li>'+
								'<a href="'+way+'html/development.html">发展历程</a>'+
							'</li>'+
							'<li>'+
								'<a href="'+way+'category.html">团队介绍</a>'+
							'</li>'+
							'<li>'+
								'<a href="'+way+'profile.html">汇隆技术</a>'+
							'</li>'+
							'<li>'+
								'<a href="'+way+'events.html">业务介绍</a>'+
							'</li>'+
						'</ul>'+
					'</div>');
	}
	function getRootPath_web(type) {
		if(type == "curWwwPath") {
			//获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
			return window.document.location.href;
		} else if(type == "pathName") {
			//获取主机地址之后的目录，如： /uimcardprj/share/meun.jsp
			return window.document.location.pathname;
		} else if(type == "pos") {
			return curWwwPath.indexOf(getRootPath_web("pathName"));
		} else if(type == "localhostPaht") {
			//获取主机地址，如： http://localhost:8083
			return curWwwPath.substring(0, getRootPath_web("pos"));
		} else if(type == "projectName") {
			//获取带"/"的项目名，如：/uimcardprj
			return getRootPath_web("pathName").substring(0, pathName.substr(1).indexOf('/') + 1);
		}
	}
});