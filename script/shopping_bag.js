$(function(){
    $('.category').mouseover(function(){
		$('.submenu').stop().slideDown(500);
	}).mouseout(function(){
		$('.submenu').stop().slideUp(500);
	});
	
	$(".que").click(function() {
		$(this).next(".anw").stop().slideToggle(300);
	   $(this).toggleClass('on').siblings().removeClass('on');
	   $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
	 });

	 $('.btn1').click(function(){
        alert('주문이 완료되었습니다. 입금이 확인되면 순차적으로 배송됩니다.');
    });
});