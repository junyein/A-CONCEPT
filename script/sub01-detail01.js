function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }
  $(function(){
    $('.category').mouseover(function(){
		$('.submenu').stop().slideDown(500);
	}).mouseout(function(){
		$('.submenu').stop().slideUp(500);
	});

  let cup = document.querySelector("#cup");
  let smallPics = document.querySelectorAll(".small");

  for (let i = 0; i < smallPics.length; i++) {
   smallPics[i].addEventListener("click", changePic);
  }

  function changePic() {
   let newPic = this.src;
   cup.setAttribute("src", newPic);
  }

  $('.btn1').click(function(){
    alert('장바구니에 담았습니다.');
});
  $('.btn2').click(function(){
    alert('로그인이 필요합니다.');
  });
});