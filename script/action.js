
$(document).ready(function() {
    $('.logo').click(function() {
        var currentPosition = $(window).scrollTop();
        $('html, body').animate({
            scrollTop: currentPosition + $(window).height()  // 100vh는 현재 뷰포트 높이에 해당합니다.
        }, 800);
        
        // 랜덤 RGB 값을 생성하여 배경색 변경
        var randomColor = getRandomColor();
        $('.logo').css('background-color', randomColor);
    });


    
    // 랜덤 RGB 값을 생성하는 함수
    function getRandomColor() {
        var r = Math.floor(Math.random() * 256); // 0부터 255 사이의 랜덤한 값
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
});