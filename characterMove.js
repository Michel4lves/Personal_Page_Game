$(window).scroll(function(){
    var scroll = $(window).scrollTop()
    dh = $(document).height()
        wh = $(window).height()
        value = (scroll / (dh-wh)) * 100
        position = $('.map').offset().left
        screener = ($('.screen').offset().left) + position
    // BREACH
    if (screener <= -3230 && screener >= -3920) {
        $('.character').css('top', 'calc(100vh - 400px)')
    // SEWER
    }else if (screener <= -7270 && screener >= -7520) {
        $('.character').css('top', 'calc(100vh - 580px)')
        $('.map').css({top: '-285px', transition: '0.2s'})
    
    }else if (screener <= -7521 && screener >= -7920) {
        $('.character').css('top', 'calc(100vh - 580px)')
        $('.map').css('top', '-360px')
    
    }else if (screener <= -7921 && screener >= -8140) {
        $('.character').css('top', 'calc(100vh - 580px)')
        $('.map').css('top', '-605px')
    
    }else if (screener <= -8141 && screener >= -11330) {
        $('.character').css('top', 'calc(100vh - 420px)')
        $('.map').css('top', '-90vh')

    }else{
        $('.character').css('top', 'calc(100vh - 380px)')
        $('.map').css({top: '0', })
    }


    console.log(screener)














})
