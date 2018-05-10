$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 350) {
		$('.buy-box').addClass('buy-box-persistente');
		$('body').css({'padding-bottom':$('.buy-box.buy-box-persistente').height()});
	}else{
		$('.buy-box').removeClass('buy-box-persistente');
		$('body').css({'padding-bottom':'0'});
	}
});