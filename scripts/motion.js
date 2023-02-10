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

    // Ant / mail collect
    if (screenPosition <= -2500) {
        $('.ant').css({animation: 'appear 0.5s linear both'})
        $('.local').css({animation: 'collect 0.2s linear both'})
        $('.local_no_collected').css({visibility: 'hidden'})
        $('.local_collected').css({visibility: 'visible'})
    }
    if (screenPosition <= -7100) {
        $('.mail').css({animation: 'collect 0.2s linear both'})
        $('.mail_no_collected').css({visibility: 'hidden'})
        $('.mail_collected').css({visibility: 'visible'})
    }
    if (screenPosition <= -11525) {
        $('.mobile').css({animation: 'collect 0.2s linear both'})
        $('.mobile_no_collected').css({visibility: 'hidden'})
        $('.mobile_collected').css({visibility: 'visible'})
    }

    // BREACH
    if (screenPosition <= -3230 && screenPosition >= -3920) {
        $('.main_person').css('top', 'calc(100vh - 400px)')
    }else{
        $('.main_person').css('top', 'calc(100vh - 380px)')
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
    if (screenPosition <= -7850 && screenPosition >= -7960) {
        $('.map').css('top', '-49px')
    }else if (screenPosition <= -7961 && screenPosition >= -8070) {
        $('.map').css('top', '-147px')
    }else if (screenPosition <= -8071 && screenPosition >= -8200) {
        $('.map').css('top', '-245px')
    }else if (screenPosition <= -8201 &&  screenPosition >= -8268) {
        $('.map').css('top', '-343px')
    }else if (screenPosition <= -8269 && screenPosition >= -8337) {
        $('.map').css('top', '-392px')
    }else if (screenPosition <= -8338 && screenPosition >= -8406) {
        $('.map').css('top', '-441px')
    }else if (screenPosition <= -8407 &&  screenPosition >= -8475) {
        $('.map').css('top', '-490px')
    }else if (screenPosition <= -8476 && screenPosition >= -8544) {
        $('.map').css('top', '-539px')
    }else if (screenPosition <= -8545 && screenPosition >= -8613) {
        $('.map').css('top', '-588px')
    }else if (screenPosition <= -8613.1 &&  screenPosition >= -8682) {
        $('.map').css('top', '-637px')
    }else if (screenPosition <= -8683 && screenPosition >= -8751) {
        $('.map').css('top', '-686px')
    }else if (screenPosition <= -8752 && screenPosition >= -8820) {
        $('.map').css('top', '-735px')
    }else if (screenPosition <= -8821 &&  screenPosition >= -8889) {
        $('.map').css('top', '-784px')
    }else if (screenPosition <= -8889.1 && screenPosition >= -8958) {
        $('.map').css('top', '-833px')
    }else if (screenPosition <= -8959 && screenPosition >= -9027) {
        $('.map').css('top', '-882px')
    }else if (screenPosition <= -9028 &&  screenPosition >= -9099) {
        $('.map').css('top', '-931px')
    }else if (screenPosition <= -9100 &&  screenPosition >= -12099) {
        $('.map').css('top', '-978px')

    }else if (screenPosition <= -12100 &&  screenPosition >= -12168) {
        $('.map').css('top', '-931px')
    }else if (screenPosition <= -12169 &&  screenPosition >= -12237) {
        $('.map').css('top', '-882px')
    }else if (screenPosition <= -12238 && screenPosition >= -12306) {
        $('.map').css('top', '-833px')
    }else if (screenPosition <= -12307 && screenPosition >= -12375) {
        $('.map').css('top', '-784px')
    }else if (screenPosition <= -12376 &&  screenPosition >= -12454) {
        $('.map').css('top', '-735px')
    }else if (screenPosition <= -12455 && screenPosition >= -12513) {
        $('.map').css('top', '-686px')
    }else if (screenPosition <= -12514 && screenPosition >= -12582) {
        $('.map').css('top', '-637px')
    }else if (screenPosition <= -12583 &&  screenPosition >= -12661) {
        $('.map').css('top', '-588px')
    }else if (screenPosition <= -12662 && screenPosition >= -12740) {
        $('.map').css('top', '-539px')
    }else if (screenPosition <= -12741 && screenPosition >= -12789) {
        $('.map').css('top', '-490px')
    }else if (screenPosition <= -12790 &&  screenPosition >= -12858) {
        $('.map').css('top', '-441px')
    }else if (screenPosition <= -12859 && screenPosition >= -12947) {
        $('.map').css('top', '-392px')
    }else if (screenPosition <= -12948 && screenPosition >= -13016) { //
        $('.map').css('top', '-343px')
    }else if (screenPosition <= -13017 &&  screenPosition >= -13156) {  //
        $('.map').css('top', '-245px')
    }else if (screenPosition <= -13157 && screenPosition >= -13276) { //
        $('.map').css('top', '-147px')
    }else if (screenPosition <= -13277 && screenPosition >= -13300) { //
        $('.map').css('top', '-49px')
    
    }else{
        $('.map').css('top', '0px')
    }


























    console.log(screenPosition)
})

// Main Personage Motion
setInterval(() => {
    $('.main_person').css('animation', 'stoping .7s steps(3) infinite')
}, 500)

