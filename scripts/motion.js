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
        $('.desktop').css({animation: 'moving 1.5s linear both, walking_a 0.5s steps(2) infinite'})
        $('.laptop').css({animation: 'moving 1.5s linear both, walking_b 0.5s steps(2) infinite', animationDelay: '0.2s'})
        $('.mobile').css({animation: 'moving 1.5s linear both, walking_c 0.5s steps(2) infinite', animationDelay: '0.4s'})
    }

    // Ant Motion
    if (screenPosition <= -2500) {
        $('.ant').css({animation: 'appear 1s linear both'})
    }

    // Ball Motion
    if (screenPosition <= -4100 && tracking[0] > tracking[1]) {
        $('.ball_a').css({animation: 'pass 1s linear both, rolling 1s steps(12) both'})
        $('.ball_b').css({visibility: 'visible', transitionDelay: '1s'})
    }
    if (screenPosition <= -4500) {
        $('.ball_b').css({animation: 'kick 1s linear both, roll 1s steps(12) both'})
        $('.beam').css({animation: 'net 1.5s steps(3) both'})
        $('.goal_keeper').css({animation: 'fall_gk 1s steps(2) infinite', animationDelay: '1s'})
    }








    console.log(screenPosition)
})

// Main Personage Motion
setInterval(() => {
    $('.main_person').css('animation', 'stoping .7s steps(3) infinite')
}, 500)
