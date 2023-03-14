function bridge(){
    if (mapPosition() >= 3170 && mapPosition() <= 3910) {
        $('.main-character').css('bottom', '95px')
    }else{
        $('.main-character').css('bottom', '80px')
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
    if (mapPosition() >= 1250) {
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
        $('.ball-a').css({animation: 'pass 1s linear both, rolling 1s steps(12) both'})
        $('.ball-b').css({visibility: 'visible', transitionDelay: '1s'})
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
        $('.knowledge').css({animation: 'classif 5s steps(6) both'}) 
    }
    if (mapPosition() >= 5350) {
        $('.frameworks').css({animation: 'classif 5s steps(6) both'}) 
    }
    if (mapPosition() >= 5900) {
        $('.learning').css({animation: 'classif 5s steps(6) both'}) 
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


function fly(){
    var screenLeft = $('.screen').offset().left
    // UP
    if (mapPosition() >= 17285 && mapPosition() <= 20250) {
        $('.game').css('top', ((mapPosition() - 17285) / 1.42) + 'px')
        $('.helicopter').css({bottom: 'calc(55px + ' + ((mapPosition() - 17285) / 1.42) + 'px)',left: 'calc(3500px + ' + (valueScroll - (17285 + screenLeft)) + 'px)'})
    }
    // DOWN
    if (mapPosition() >= 20250.01 && mapPosition() <= 21070) {
        $('.game').css('top', (1570 - (mapPosition() - 20250.01) / 1.42) + 'px')
        $('.helicopter').css({bottom: 'calc(55px + ' + (1570 - (mapPosition() - 20250.01) / 1.42) + 'px)',left: 'calc(3500px + ' + (valueScroll - (17285 + screenLeft)) + 'px)'})
    }
    // RIGHT
    if (mapPosition() >= 21050.01) {
        $('.game').css('top', '985px')
        $('.helicopter').css({bottom: '1055px'})
    }





    console.log(valueScroll)
    console.log(screenLeft)


}





















// function fly(){
//     var screenLeftAdditional = $('.screen').offset().left
//         gameTop = 0
//     // UP
//     if (mapPosition() >= 17265) {
//         $('.game').css({top: (mapPosition() - 17265) / 1.42 + 'px', left: -(17265 + screenLeftAdditional) + 'px'})
//         gameTop = $('.game').css('top')
//         $('.helicopter').css('bottom', 'calc(55px + ' + gameTop + ')')
//     }else{
//         $('.helicopter').css('bottom', '55px')
//     }
//     // RIGHT
//     var gameTopValue = 0
//     if ($('.game').css('top') != '0px' && mapPosition() >= 17000) {
//         gameTopValue = gameTop.split('px').join('')
//     }
//     if (gameTopValue >= 1065) {
//         $('.game').css({left: - ((valueScroll - parseFloat(1065) - screenLeftAdditional)) + 'px', top: '1065px'})
//         $('.helicopter').css({left: parseFloat(3500) + (mapPosition() - 17265) + 'px', bottom: '1120px'})
//     }else{
//         $('.helicopter').css({left: '3500px'})
//     }
//     // DOWN
//     if (mapPosition() >= 17950) {
//         $('.game').css({top: parseFloat(1065) - (mapPosition() - 17950) / 1.42 + 'px', left: -(17950 + screenLeftAdditional) + 'px'})
//         gameTop = $('.game').css('top')
//         $('.helicopter').css({bottom: 'calc(55px + ' + gameTop + ')', left: '4185px'})
//     }
//     // OUT
//     gameTopValue2 = 0
//     if ($('.game').css('top') != '0px' && mapPosition() == 17950) {
//         gameTopValue2 = gameTop.split('px').join('')
//     }
//     if (gameTopValue2 <= 990 && gameTopValue2 != 0) { //////////////////////////////
//         $('.game').css({left: - (valueScroll - (parseFloat(1135) + screenLeftAdditional)) + 'px', top: '990px'})
//         $('.helicopter').css({bottom: '1051px'})
//     }
    
    
//     console.log(valueScroll)


// }








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
    fly()
})