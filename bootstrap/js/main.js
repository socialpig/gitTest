$(window).scroll(function(){
	headerInit();
	
});
function headerInit(){
	if($(this).scrollTop()>0){
		$("body").addClass("fiexed-header-on");
		
	}else{
		$("body").removeClass("fiexed-header-on");
	}
	
}
headerInit();

//动态被背景图片代码
$(function(){
  $(".index").css({ opacity: .8 });  //设置透明度
//$.backstretch(["img/小黄人6.jpg"]); //背景
  $(".index").backstretch(["img/20130310193015_3ZdwW.thumb.600_0.jpeg","img/20160713154957678313.jpg","img/150.jpg"],{duration:4000}); //元素背景，切换现实
});

//滚动监听
$('body').scrollspy({target:'#mynavbar'})

  $(function(){
  $('.linkto-index').click(function(){$('html,body').animate({scrollTop:$('#index').offset().top}, 800);}); 
  $('.linkto-about').click(function(){$('html,body').animate({scrollTop:$('.about').offset().top}, 800);});
  $('.scroll_bottom').click(function(){$('html,body').animate({scrollTop:$('.bottom').offset().top}, 800);});
});
