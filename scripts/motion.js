var tracking = []
var stairs = 0

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
        $('.desktop_a').css({animation: 'moving 1.5s linear both, walking_a 0.5s steps(2) infinite', visibility: 'hidden', transitionDelay: '1.5s'})
        $('.desktop_b').css({visibility: 'visible', transitionDelay: '1.7s'})
        
        $('.laptop_a').css({animation: 'moving 1.5s linear both, walking_b 0.5s steps(2) infinite', animationDelay: '0.2s', visibility: 'hidden', transitionDelay: '1.7s'}) 
        $('.laptop_b').css({visibility: 'visible', transitionDelay: '1.9s', animationDelay: '1s'})
        
        $('.mobile_a').css({animation: 'moving 1.5s linear both, walking_c 0.5s steps(2) infinite', animationDelay: '0.4s', visibility: 'hidden', transitionDelay: '1.9s'})
        $('.mobile_b').css({visibility: 'visible', transitionDelay: '2.1s', animationDelay: '1s'})
    }

    // Ant Motion
    if (screenPosition <= -2500) {
        $('.ant').css({animation: 'appear 0.5s linear both'})
        $('.local').css({animation: 'collect 0.2s linear both'})
        $('.local_no_collected').css({visibility: 'hidden'})
        $('.local_collected').css({visibility: 'visible'})
    }

    // Ball Motion
    if (screenPosition <= -4100 && tracking[0] > tracking[1]) {
        $('.ball_a').css({animation: 'pass 1s linear both, rolling 1s steps(12) both'})
        $('.ball_b').css({visibility: 'visible', transitionDelay: '1s'})
    }
    if (screenPosition <= -4500) {
        $('.ball_b').css({animation: 'kick 1s linear both, roll 1s steps(12) both'})
        $('.beam_a').css({animation: 'net 1.5s steps(3) both', visibility: 'hidden', transitionDelay: '1.5s'})
        $('.beam_b').css({visibility: 'visible', transitionDelay: '1.5s'})
        $('.goal_keeper').css({animation: 'fall_gk 1s steps(2) infinite', animationDelay: '1s'})
        
        $('.crowd_a').css({visibility: 'hidden', transitionDelay: '1s'})
        $('.crowd_b').css({visibility: 'hidden', transitionDelay: '1s'})
        $('.crowd_a2').css({animation: 'goal 0.5s linear infinite', animationDelay: '1s',  transitionDelay: '1s', visibility: 'visible'})
        $('.crowd_b2').css({animation: 'goal 0.5s linear infinite', animationDelay: '1s',  transitionDelay: '1s', visibility: 'visible'})
    }

    if (screenPosition <= -4800) {
        $('.knowlege').css({animation: 'classif 5s steps(6) both'}) 
    }
    if (screenPosition <= -5300) {
        $('.frameworks').css({animation: 'classif 5s steps(6) both'}) 
    }
    if (screenPosition <= -5800) {
        $('.learning').css({animation: 'classif 5s steps(6) both'}) 
    }



    // SUBWAY

    // Stairs
    if (screenPosition <= -7850 && screenPosition >= -7960 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-49px')
    }else if (screenPosition <= -7961 && screenPosition >= -8070 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-147px')
    }else if (screenPosition <= -8071 && screenPosition >= -8200 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-245px')
    }else if (screenPosition <= -8201 &&  screenPosition >= -8268 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-343px')
    }else if (screenPosition <= -8269 && screenPosition >= -8337 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-392px')
    }else if (screenPosition <= -8338 && screenPosition >= -8406 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-441px')
    }else if (screenPosition <= -8407 &&  screenPosition >= -8475 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-490px')
    }else if (screenPosition <= -8476 && screenPosition >= -8544 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-539px')
    }else if (screenPosition <= -8545 && screenPosition >= -8613 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-588px')
    }else if (screenPosition <= -8614 &&  screenPosition >= -8682 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-637px')
    }else if (screenPosition <= -8683 && screenPosition >= -8751 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-686px')
    }else if (screenPosition <= -8752 && screenPosition >= -8820 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-735px')
    }else if (screenPosition <= -8821 &&  screenPosition >= -8889 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-784px')
    }else if (screenPosition <= -8890 && screenPosition >= -8958 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-833px')
    }else if (screenPosition <= -8959 && screenPosition >= -9027 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-882px')
    }else if (screenPosition <= -9028 &&  screenPosition >= -9099 && tracking[0] > tracking[1]) {
        $('.map').css('top', '-931px')
    }else if (screenPosition <= -9100 &&  tracking[0] > tracking[1]) {
        $('.map').css('top', '-978px')
    }





    console.log(screenPosition)
})

// Main Personage Motion
setInterval(() => {
    $('.main_person').css('animation', 'stoping .7s steps(3) infinite')
}, 500)


