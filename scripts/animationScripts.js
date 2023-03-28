function bridge(){
    if (mapPosition() >= 3170 && mapPosition() <= 3910) {
        $('.main-character').css('bottom', '90px')
    }else{
        $('.main-character').css('bottom', '75px')
    }
}


function subway(){
    if (mapPosition() >= 9080.1 && mapPosition() <= 12010) {
        $('.game').css('top', '-978px')
    }else{
        $('.game').css('top', '0px')
    }
}


function stairs(){
    if (mapPosition() >= 7700 && mapPosition() <= 9080) {
        $('.game').css('top', - ((mapPosition() - 7700) / 1.42) + 'px')
    }
    if (mapPosition() >= 12010.1 && mapPosition() <= 13390) {
        $('.game').css('top', -978 + ((mapPosition() - 12010.1) / 1.42) + 'px')
    }
}


function devicesMotion(){
    if (mapPosition() >= 1100) {
        $('.desktop-a').css({animation: 'moving 1.5s linear both, walking_a 0.5s steps(2) infinite', visibility: 'hidden', transitionDelay: '1.5s'})
        $('.desktop-b').css({visibility: 'visible', transitionDelay: '1.7s'})

        $('.laptop-a').css({animation: 'moving 1.5s linear both, walking_b 0.5s steps(2) infinite', animationDelay: '0.2s', visibility: 'hidden', transitionDelay: '1.7s'}) 
        $('.laptop-b').css({visibility: 'visible', transitionDelay: '1.9s', animationDelay: '1s'})

        $('.mobile-a').css({animation: 'moving 1.5s linear both, walking_c 0.5s steps(2) infinite', animationDelay: '0.4s', visibility: 'hidden', transitionDelay: '1.9s'})
        $('.mobile-b').css({visibility: 'visible', transitionDelay: '2.1s', animationDelay: '1s'})
    }
}


function soccerMotion(){
    // Step one
    if (mapPosition() >= 4030 && directionValues[0] < directionValues[1]) {
        $('.ball-a').css({animation: 'pass 0.5s linear both, rolling 0.5s steps(12) both'})
        $('.ball-b').css({visibility: 'visible', transitionDelay: '0.5s'})
    }
    // Step two
    if (mapPosition() >= 4460) {
        $('.ball-b').css({animation: 'kick 1s linear both, roll 1s steps(12) both'})
        $('.beam-a').css({animation: 'net 1.5s steps(3) both', visibility: 'hidden', transitionDelay: '1.5s'})
        $('.beam-b').css({visibility: 'visible', transitionDelay: '1.5s'})
        $('.goal-keeper').css({animation: 'fall_gk 1s steps(2) infinite', animationDelay: '1s'})
        $('.crowd-a').css({visibility: 'hidden', transitionDelay: '1s'})
        $('.crowd-b').css({visibility: 'hidden', transitionDelay: '1s'})
        $('.crowd-a2').css({animation: 'goal 0.5s linear infinite', animationDelay: '1s',  transitionDelay: '1s', visibility: 'visible'})
        $('.crowd-b2').css({animation: 'goal 0.5s linear infinite', animationDelay: '1s',  transitionDelay: '1s', visibility: 'visible'})
    }
}


function Skills() {
    if (mapPosition() >= 4900) {
        $('.knowledge').css({animation: 'classif 3s steps(6) both'}) 
    }
    if (mapPosition() >= 5350) {
        $('.frameworks').css({animation: 'classif 3s steps(6) both'}) 
    }
    if (mapPosition() >= 5900) {
        $('.learning').css({animation: 'classif 3s steps(6) both'}) 
    }
}


function screenIcons(){
// Local
    if (mapPosition() >= 2850) {
        $('.local').css({animation: 'collect 0.2s linear both'})
        $('.local-no-collected').css({visibility: 'hidden'})
        $('.local-collected').css({visibility: 'visible'})
    }
// Mail
    if (mapPosition() >= 7100) {
        $('.mail').css({animation: 'collect 0.2s linear both'})
        $('.mail-no-collected').css({visibility: 'hidden'})
        $('.mail-collected').css({visibility: 'visible'})
    }
// Mobile
    if (mapPosition() >= 11500) {
        $('.mobile').css({animation: 'collect 0.2s linear both'})
        $('.mobile-no-collected').css({visibility: 'hidden'})
        $('.mobile-collected').css({visibility: 'visible'})
    }
// Github
    if (mapPosition() >= 15400) {
        $('.github').css({animation: 'collect 0.2s linear both'})
        $('.github-no-collected').css({visibility: 'hidden'})
        $('.github-collected').css({visibility: 'visible'})
    }
}


function desertHill(){
    var contJump = 0
    if (mapPosition() >= 14600 && mapPosition() <= 16105) {
    $('.main-character').css('bottom', '210px')
    contJump = 1
    }
    roadMap()
    if (mapPosition() >= 14520 && mapPosition() <= 15300 && directionValues[0] < directionValues[1] && contJump == 0) {
        mainCharacterJumping()
    }
    if (mapPosition() >= 15300 && mapPosition() <= 16230 && directionValues[0] > directionValues[1] && contJump == 0) {
        mainCharacterJumping()
    }
}


function pilot() {
    if (mapPosition() >= 17220 && mapPosition() <= 21070) {
        $('.main-character').css('visibility', 'hidden')
        $('.pilot').css({visibility: 'visible', animation: 'pilot 0.5s linear both'})
        $('.helicopter-propeller-a').css({animation: 'propeller-a 0.1s steps(4) infinite'})
        $('.helicopter-propeller-b').css({animation: 'propeller-b 0.1s steps(4) infinite'})
    }else{
        $('.main-character').css('visibility', 'visible')
        $('.pilot').css({visibility: 'hidden', animation: 'none'})
        $('.helicopter-propeller-a').css({animation: 'propeller-a 1s steps(4) infinite'})
        $('.helicopter-propeller-b').css({animation: 'propeller-b 1s steps(4) infinite'})
    }
}


function birdFly() {
    if (mapPosition() >= 18000) {
        $('.bird-box').css({animation: 'bird-fly 8s linear both'})
    }
}


function moon() {
    if (mapPosition() >= 13200 && mapPosition() <= 17285) {
        $('.moon').css({bottom: '500px', left: (((mapPosition() + 420) - 13200)) + 'px'})
    }
}


function fly(){
    var screenLeft = $('.screen').offset().left
    // UP
    if (mapPosition() >= 17285 && mapPosition() <= 19850) {
        $('.game').css('top', ((mapPosition() - 17285) / 1.42) + 'px')
        $('.helicopter').css({bottom: 'calc(55px + ' + ((mapPosition() - 17285) / 1.42) + 'px)',left: 'calc(3500px + ' + (valueScroll - (17285 + screenLeft)) + 'px)'})
        $('.moon').css({bottom: 'calc(500px + ' + ((mapPosition() - 17285) / 1.42) + 'px)',left: 'calc(4500px + ' + (valueScroll - (17285 + screenLeft)) + 'px)'})
    }else if (mapPosition() <= 17285.999) {
        $('.helicopter').css({bottom: '55px'})
        $('.moon').css({bottom: '500px'})
    }
    // DOWN
    if (mapPosition() >= 19850.01 && mapPosition() <= 20988) {//
        $('.game').css('top', (1800 - (mapPosition() - 19850.01) / 1.42) + 'px')
        $('.helicopter').css({bottom: 'calc(55px + ' + (1800 - (mapPosition() - 19850.01) / 1.42) + 'px)',left: 'calc(3500px + ' + (valueScroll - (17285 + screenLeft)) + 'px)'})
        $('.moon').css({bottom: 'calc(500px + ' + (1800 - (mapPosition() - 19850.01) / 1.42) + 'px)',left: 'calc(4500px + ' + (valueScroll - (17285 + screenLeft)) + 'px)'})
    }
    // RIGHT
    if (mapPosition() >= 20988.01) {
        $('.game').css('top', '985px')
        $('.helicopter').css({bottom: '1055px'})
        $('.moon').css({bottom: '1500px', left: 'calc(8202.18px + ' + (valueScroll - (20988.01 + screenLeft)) + 'px)'})
    }
}


function finalLinks(){
    var mapLeft = ($(window).height() + $(window).scrollTop()) + 1
    if (mapLeft >= (document.body.scrollHeight)){
        $('.linkedin-icon').css({visibility: 'visible', transitionDelay: '11s'})
        $('.linkedin-ballon').css({visibility: 'visible', transitionDelay: '11s'})
        $('.linkedin-link').css({visibility: 'visible', transitionDelay: '11s'})
        $('.final-links').css({visibility: 'visible', transitionDelay: '5s', animation: 'info-show 5s linear both', animationDelay: '5s'})
        $('.fireworks').css({visibility: 'visible', transitionDelay: '11s'})
    }
}


function iconsCollected(){
    var mapLeft = ($(window).height() + $(window).scrollTop()) + 1
    if (mapLeft >= (document.body.scrollHeight)){
        $('.local-collected').css({animation: 'local-collected 0.5s linear both', animationDelay: '0.5s'})
        $('.local-collected-final').css({visibility: 'visible', transitionDelay: '1s'})
        $('.hide-1').css({visibility: 'visible', transitionDelay: '3s'})
        $('.explode-1').css({visibility: 'visible', transitionDelay: '3s', animation: 'explode 0.5s steps(7) both', animationDelay: '3s'})
        
        $('.mail-collected').css({animation: 'mail-collected 0.5s linear both', animationDelay: '0.7s'})
        $('.mail-collected-final').css({visibility: 'visible', transitionDelay: '1.2s'})
        $('.hide-2').css({visibility: 'visible', transitionDelay: '3.5s'})
        $('.explode-2').css({visibility: 'visible', transitionDelay: '3.5s', animation: 'explode 0.5s steps(7) both', animationDelay: '3.5s'})

        $('.mobile-collected').css({animation: 'mobile-collected 0.5s linear both', animationDelay: '0.9s'})
        $('.mobile-collected-final').css({visibility: 'visible', transitionDelay: '1.4s'})
        $('.hide-3').css({visibility: 'visible', transitionDelay: '4s'})
        $('.explode-3').css({visibility: 'visible', transitionDelay: '4s', animation: 'explode 0.5s steps(7) both', animationDelay: '4s'})

        $('.github-collected').css({animation: 'github-collected 0.5s linear both', animationDelay: '1.1s'})
        $('.github-collected-final').css({visibility: 'visible', transitionDelay: '1.6s'})
        $('.hide-4').css({visibility: 'visible', transitionDelay: '4.5s'})
        $('.explode-4').css({visibility: 'visible', transitionDelay: '4.5s', animation: 'explode 0.5s steps(7) both', animationDelay: '4.5s'})
    }
}


function messageClick(){
    $('.change-form').click(function() {
        $('.final-links').addClass('message')
    })
    $('.back-form').click(function() {
        $('.final-links').removeClass('message')
    })
}






$(window).scroll(function(){
    bridge()
    subway()
    stairs()
    devicesMotion()
    soccerMotion()
    Skills()
    screenIcons()
    desertHill()
    pilot()
    birdFly()
    moon()
    fly()
    finalLinks()
    iconsCollected()
    messageClick()
})