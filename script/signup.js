$(function(){
    $('.category').mouseover(function(){
		$('.submenu').stop().slideDown(500);
	}).mouseout(function(){
		$('.submenu').stop().slideUp(500);
	});

	$('.btn4').click(function(){
        alert('회원가입이 완료되었습니다.');
    });

	$('.btn5').click(function(){
        alert('회원가입이 취소되었습니다.');
    });
});