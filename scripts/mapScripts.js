function roadMap(){
    var windowHeight = $(window).height()
        documentHeight = $(document).height()
        scroll = $(window).scrollTop()
        valueScroll = (scroll/(documentHeight - windowHeight) * documentHeightCustom)
    $('.game').css({left: - valueScroll + 'px'})
}


function mapPosition(position){
    var position = -($('.game').offset().left + $('.screen').offset().left)
    return position
}


function mapReferences(){
    var windowWidth = $(window).width()
        screenLeftWidth = $('.screen').offset().left
        initialScreenWidth = $(window).width()
        phase1Width = $('.phase-1-map').width()
        phase2Width = $('.phase-2-map').width()
        phase3Width = $('.phase-3-map').width()
        phase4Width = $('.phase-4-map').width()
        phase4CompensationScreenWidth = phase4Width + screenLeftWidth
        mapWidth = initialScreenWidth + phase1Width + phase2Width + phase3Width + phase4CompensationScreenWidth
        documentHeightCustom = mapWidth - windowWidth
}


function landsMove(){
    $('.city-a').css({left: (valueScroll / 4) + 'px'})
    $('.clouds').css({left: ((valueScroll - 3600) / 2) + 'px'})
    $('.city-b').css({left: (valueScroll / 8) + 'px'})
    $('.dark-clouds').css({left: ((valueScroll - 13000) / 2) + 'px'})
    $('.sun').css({left: ((valueScroll + 800) ) + 'px', bottom: ( - (mapPosition()) / 50) + 600 + 'px'})
    if (mapPosition() >= 9965) {
        $('.sun').css({display: 'none'})
    }
}

function finalLinks(){
    var mapLeft = $('.game').offset().left
    if (mapLeft == -documentHeightCustom){
        $('.linkedin').css({display: 'block'})
        $('.linkedin-icon').css({display: 'block'})
        $('.linkedin-ballon').css({display: 'block'})
    }else{
        $('.linkedin').css({display: 'none'})
        $('.linkedin-icon').css({display: 'none'})
        $('.linkedin-ballon').css({display: 'none'})
    }
}


$(window).scroll(function(){
    roadMap()
    mapPosition()
    landsMove()
    finalLinks()
})


$(document).ready(function(){
    mapReferences()
    $('body').css({height: documentHeightCustom})
    $('.game').css({width: mapWidth})
})