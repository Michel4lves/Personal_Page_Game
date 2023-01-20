var tracking = []

$(window).scroll(function(){
    var scroll = $(window).scrollTop()
        dh = $(document).height()
        wh = $(window).height()
        value = (scroll / (dh-wh)) * 100
    $('.map').css('left', - value * 20 + '%')


    // Main Personage Motion
    $('.main_person').css('animation', 'runing 1s steps(6) infinite')

    var position = $('.map').offset().left
        screenPosition = ($('.screen').offset().left) + position
    tracking.push(screenPosition)
    if (tracking.length > 2) {
        tracking.shift()
    }

    if (tracking[0] > tracking[1]) {
        $('.main_person').css('transform', 'scaleX(1)')
    }else{
        $('.main_person').css('transform', 'scaleX(-1)')
    }


    // Laptop Motion
    if (screenPosition <= -1100) {
        $('.desktop').css({animation: 'moving 1.5s linear both'})
        $('.laptop').css({animation: 'moving 1.5s linear both', animationDelay: '0.2s'})
        $('.mobile').css({animation: 'moving 1.5s linear both', animationDelay: '0.4s'})
    }










    console.log(screenPosition)
})

// Main Personage Motion
setInterval(() => {
    $('.main_person').css('animation', 'stoping .7s steps(3) infinite')
}, 500)


