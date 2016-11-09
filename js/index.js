$(function(){
	//头部选项卡
	$(".menu-container> ul> li").hover(function(){
		$(this).children("ul").css("display","block");
		$(this).children("a").css({color:"#fff"});
	},function(){
		$(this).children("ul").css("display","none");
		$(this).children("a").css({color:"#1e1e1e"});
	})

	//banner图
	$(window).resize(function(){
		if($(".ban").width()>960){
			$(".ban").height(400)
		}else if($(".ban").width()<=960){
			$(".ban").height(function(){
				return (400/960)*$(".ban").width()
			})
			$("html").css("fontSize",$(".ban").width()/960*100+"%")
		}
	})
	var time=setInterval(play,4000);
	var now=0;
	$(".ban-lis").children().removeClass("active");
	$(".ban-lis").css("display","none").eq(0).css("display","block").children().addClass("active");
	function play(){
		now++;
		if (now>=$(".ban-lis").length){
			now=0;
		}
		$(".ban-lis").children().removeClass("active");
		$(".ban-lis").css("display","none").eq(now).css("display","block").children().animate({},600,function(){$(this).addClass("active")});
	}
	function playl(){
		now--;
		if (now<0) {
			now=$(".ban-lis").length-1;
		};
		$(".ban-lis").children().removeClass("active");
		$(".ban-lis").css("display","none").eq(now).css("display","block").children().animate({},600,function(){$(this).addClass("active")});
	}
	$(".banbox").hover(function(){
		$(".rt").css({display:"block"})
		$(".lt").css({display:"block"})
		clearInterval(time);
	},function(){
		$(".rt").css({display:"none"})
		$(".lt").css({display:"none"})
		time=setInterval(play,4000);
	})
	$(".rt").click(function(){
		play();
	})
	$(".lt").click(function(){
		playl();
	})

	//8图轮播
	var box=$(".jcarousel-container-horizontal");
	var t=setInterval(move,4000);
	var s=0;
	var flag=true;
	function move(){
		var w=box.children().outerWidth(true);
		s+=w;
		if(s>4*w){
			s=0;
		}
		box.animate({left:-s},500,function(){flag=true});
	}
	function movel(){
		var w=box.children().outerWidth(true);
		s-=w;
		if(s<0){
			s=4*w;
		}
		box.animate({left:-s},500,function(){flag=true});
	}
	$(".jcarousel-container").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,4000);
	})
	$(".jcarousel-prev").click(function(){
		if(flag){
			flag=false;
			movel();
		}	
	})
	$(".jcarousel-next").click(function(){
		if(flag){
			flag=false;
			move();
		}
	})

	//底部选项卡
	$(".tab_nav").children().click(function(){
		$(".tab_nav").children().removeClass().eq($(this).index()).addClass("active");
		$(".tab_mains").css({display:"none"}).eq($(this).index()).css({display:"block"})
	})
})
