$('.hero').mousemove(function(e){
    let mouseX = e.pageX;
    let mouseY = e.pageY;

    $('.img1').css({left:-mouseX*0.1, top:-mouseY*0.1});
    $('.img2').css({right:-mouseX*0.1, bottom:-mouseY*0.1});
    /* -로 방향 반대, 0.1은 속도 조절 */
})

$(window).scroll(function(){
    let scrT = $(window).scrollTop(); /* 스크롤 값을 구하는 식 */

    $('header').css({top:scrT});
    $('.wrap').css({transform:'scale('+(scrT*0.01+1)+')'});
})