var tracking = []
var stairs = 0

function positionScreen() {
    var position = $('.map').offset().left
    screenPosition = ($('.screen').offset().left) + position
    tracking.push(screenPosition)
    if (tracking.length > 2) {
        tracking.shift()
    }
}


function characterDirection() {
    positionScreen()
    if (tracking[0] > tracking[1]) {
        $('.main_person').css('transform', 'scaleX(1)')
    }else{
        $('.main_person').css('transform', 'scaleX(-1)')
    }
}


function jumping() {
    $('.main_person').addClass('jump')
    setTimeout(() => {
        $('.main_person').removeClass('jump')
    },500)
}


function running() {
    $('.main_person').addClass('running')
    $('.main_person').removeClass('stopping')
}


$(window).scroll(function(){
    var scroll = $(window).scrollTop()
        dh = $(document).height()
        wh = $(window).height()
        value = (scroll / (dh-wh)) * 100
    
    $('.map').css('left', - value * 12 + '%')
    $('.city-a').css('left', (value / 5) * 10 + '%')
    $('.city-b').css('left', (value / 18) * 10 + '%')

    
    // Main Personage Motion
    characterDirection()
    running()

    // Desktop, laptop, mobile Motion
    if (screenPosition <= -1100) {
        $('.desktop_a').css({animation: 'moving 1.5s linear both, walking_a 0.5s steps(2) infinite', visibility: 'hidden', transitionDelay: '1.5s'})
        $('.desktop_b').css({visibility: 'visible', transitionDelay: '1.7s'})
        
        $('.laptop_a').css({animation: 'moving 1.5s linear both, walking_b 0.5s steps(2) infinite', animationDelay: '0.2s', visibility: 'hidden', transitionDelay: '1.7s'}) 
        $('.laptop_b').css({visibility: 'visible', transitionDelay: '1.9s', animationDelay: '1s'})
        
        $('.mobile_a').css({animation: 'moving 1.5s linear both, walking_c 0.5s steps(2) infinite', animationDelay: '0.4s', visibility: 'hidden', transitionDelay: '1.9s'})
        $('.mobile_b').css({visibility: 'visible', transitionDelay: '2.1s', animationDelay: '1s'})
    }

    // Local, mail, cell collect
    if (screenPosition <= -2890) {
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

    // Breach
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

    // Skills
    if (screenPosition <= -4800) {
        $('.knowledge').css({animation: 'classif 5s steps(6) both'}) 
    }
    if (screenPosition <= -5300) {
        $('.frameworks').css({animation: 'classif 5s steps(6) both'}) 
    }
    if (screenPosition <= -5800) {
        $('.learning').css({animation: 'classif 5s steps(6) both'}) 
    }

    // SUBWAY
    // Stairs
    if (screenPosition <= -7760 &&  screenPosition >= -9099) {
        $('.map').css('top', (value - 35.6) * (-17.25) + '%')
    }else
    if (screenPosition <= -9099.1 &&  screenPosition >= -12085) {
        $('.map').css('top', '-978px')
    }else
    if (screenPosition <= -12085.1 &&  screenPosition >= -13420) {
        $('.map').css('top', ((value - 54.5) * (17.2)) - 100 + '%')
        // $('.map').css('top', '0px')
    }else{
        $('.map').css('top', '0px')
    }


    // Desert hill
    var contJump = 0
    if (screenPosition <= -14595 && screenPosition >= -16150) {
        $('.main_person').css('top', 'calc(100vh - 510px)')
        contJump = 1
    }
    if (screenPosition <= -14550 && screenPosition >= -15300 && tracking[0] > tracking[1] && contJump == 0) {
        jumping()
    }
    if (screenPosition <= -15300 && screenPosition >= -16235 && tracking[0] < tracking[1] && contJump == 0) {
        jumping()
    }

    // Pilot
    if (screenPosition <= -17270 && screenPosition >= -20730) {
        $('.main_person').css('visibility', 'hidden')
        $('.pilot').css({visibility: 'visible', animation: 'pilot 0.5s linear both'})
        $('.helicopter-propeller-a').css({animation: 'propeller-a 0.1s steps(4) infinite'})
        $('.helicopter-propeller-b').css({animation: 'propeller-b 0.1s steps(4) infinite'})
    }else{
        $('.main_person').css('visibility', 'visible')
        $('.pilot').css({visibility: 'hidden', animation: 'none'})
        $('.helicopter-propeller-a').css({animation: 'propeller-a 1s steps(4) infinite'})
        $('.helicopter-propeller-b').css({animation: 'propeller-b 1s steps(4) infinite'})
    }


    // Fly
    if (screenPosition <= -17320) {
        $('.map').css({top: ((value - (71.403)) * 10) + '%', left: '-928.25%'})
        $('.city-b').css({bottom: ((value - (71.403)) * 5) + '%', left: '38.701%'})
        $('.helicopter').css({top: 'calc((100vh - 600px) - ' + ((value - (71.403)) * 10) + '%)'})
    }

    if (screenPosition <= -19950) {
        $('.map').css({top: '107.5%', left: - ((value * 13) - 140.210) + '%'})
        $('.helicopter').css({top: 'calc((100vh - 600px) - 106%)', left: 'calc((3500px) + ' + ((value - (82.076)) * 4) + '%)'})
    }


    if (screenPosition <= -20600) {
        $('.helicopter').css({left: 'calc(3500px + 10.45%)'})
    }

    if (screenPosition <= -20700) {
        $('.map').css({top: '100%', left: - ((value * 13) - 140.210) + '%'})
        $('.helicopter').css({top: 'calc((100vh - 600px) - 104%)', left: 'calc(3500px + 10.45%)'})
    }





    console.log(screenPosition)
    console.log(value)
    console.log(value - 100)
})

const stopping = setInterval(() => {
    $('.main_person').removeClass('running')
    $('.main_person').addClass('stopping')
}, 500)

