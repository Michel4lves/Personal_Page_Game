$(document).ready(function(){
    $(window).scroll(function(){
        var position = -($('.game').offset().left + $('.screen').offset().left)
        $('#position-value').text(position)
        $('#orientation-value').text(orientationValue)
        $('#cdh-value').text(documentHeightCustom)
        $('#mw-value ').text(mapWidth)
        $('#isw-value').text(initialScreenWidth)
        $('#p1w-value ').text(phase1Width)
        $('#p2w-value ').text(phase2Width)
        $('#p3w-value ').text(phase3Width)
        $('#p4w-value ').text(phase4Width)
    })
})
