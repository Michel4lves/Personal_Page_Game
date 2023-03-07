const mainCharacterStopping = setInterval(() => {
    $('.main-character').removeClass('running')
    $('.main-character').addClass('stopping')
}, 500)


function mainCharacterRunning() {
    $('.main-character').addClass('running')
    $('.main-character').removeClass('stopping')
}


function mainCharacterJumping() {
    $('.main-character').addClass('jump')
    setTimeout(() => {
        $('.main-character').removeClass('jump')
    },500)
}


var directionValues = []
    orientationValue = ''
function mainCharacterDirection(){
    roadMap()
    directionValues.push(valueScroll)
    if (directionValues.length > 2) {
        directionValues.shift()
    }
    if (directionValues[0] < directionValues[1] || directionValues.length == 1) {
        $('.main-character').css('transform', 'scaleX(1)')
        orientationValue = 'right'
    }else{
        $('.main-character').css('transform', 'scaleX(-1)')
        orientationValue = 'left'
    }
}


$(window).scroll(function() {
    mainCharacterRunning()
    mainCharacterDirection()

})

