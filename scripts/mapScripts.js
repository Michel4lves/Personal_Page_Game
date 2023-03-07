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
        initialScreenWidth = $(window).width()
        phase1Width = $('.phase-1-map').width()
        phase2Width = $('.phase-2-map').width()
        phase3Width = $('.phase-3-map').width()
        phase4Width = $('.phase-4-map').width()
        mapWidth = initialScreenWidth + phase1Width + phase2Width + phase3Width + phase4Width
        documentHeightCustom = mapWidth - windowWidth
}


function citiesMove(){
    $('.city-a').css({left: (valueScroll / 4) + 'px'})
    $('.city-b').css({left: (valueScroll / 8) + 'px'})
}


$(window).scroll(function(){
    roadMap()
    mapPosition()
    citiesMove()
})


$(document).ready(function(){
    mapReferences()
    $('body').css({height: documentHeightCustom})
    $('.game').css({width: mapWidth})
})