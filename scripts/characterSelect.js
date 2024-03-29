var characterName = ['Carol', 'Michael', 'Martha', 'Pedro']

function choiceCharacter(){
    select = 0
    $('.right-choice').click(function() {
        if ($('.character').hasClass(characterName[select])){
            $('.character').addClass(characterName[select + 1]).removeClass(characterName[select])
            if (select == characterName.length - 1) {
                select = characterName.length - 1
                $('.character').addClass(characterName[select])
                $('.character-name').text(characterName[select])
                $('.character-number').text((select + 1).toString() + '/' + characterName.length.toString())
                $('.main-character').addClass(characterName[select]).removeClass(characterName[select - 1])
                $('.welcome-character').addClass(characterName[select]).removeClass(characterName[select - 1])
                $('.pilot').addClass(characterName[select]).removeClass(characterName[select + 1])
            }else{
                select += 1
                $('.character-name').text(characterName[select])
                $('.character-number').text((select + 1).toString() + '/' + characterName.length.toString())
                $('.main-character').addClass(characterName[select]).removeClass(characterName[select - 1])
                $('.welcome-character').addClass(characterName[select]).removeClass(characterName[select - 1])
                $('.pilot').addClass(characterName[select]).removeClass(characterName[select + 1])
            }
        } 
    })
    $('.left-choice').click(function() {
        if ($('.character').hasClass(characterName[select])){
            $('.character').addClass(characterName[select - 1]).removeClass(characterName[select])
            if (select == 0) {
                select = 0
                $('.character').addClass(characterName[select])
                $('.character-name').text(characterName[select])
                $('.character-number').text((select + 1).toString() + '/' + characterName.length.toString())
                $('.main-character').addClass(characterName[select]).removeClass(characterName[select + 1])
                $('.welcome-character').addClass(characterName[select]).removeClass(characterName[select + 1])
                $('.pilot').addClass(characterName[select]).removeClass(characterName[select + 1])
            }else{
                select -= 1
                $('.character-name').text(characterName[select])
                $('.character-number').text((select + 1).toString() + '/' + characterName.length.toString())
                $('.main-character').addClass(characterName[select]).removeClass(characterName[select + 1])
                $('.welcome-character').addClass(characterName[select]).removeClass(characterName[select + 1])
                $('.pilot').addClass(characterName[select]).removeClass(characterName[select + 1])
            }
        } 
    })
    $('.choice-ok').click(function() {
        $('.character-picture').css({animation: 'chosen 1s linear both', visibility: 'hidden', transitionDelay: '1s'})
        $('.character-choice-screen').css({transform: 'translateY(-200vh)', transition: '2s', transitionDelay: '1s'})
        $('.welcome-screen').css({visibility: 'visible', transitionDelay: '1s'})
        $('.welcome-ballon').css({visibility: 'visible', transitionDelay: '2s'})
        $('.main-character').css({visibility: 'hidden'})
    })
}


function start() {
    $('.begin').click(function() {
        $('body').css({overflow: 'auto'})
        $('.welcome-character').css({visibility: 'hidden'})
        $('.main-character').css({visibility: 'visible'})
        $('.welcome-screen').css({visibility: 'hidden'})
        $('.welcome-ballon').css({visibility: 'hidden', transitionDelay: '0s'})
        $('.initial-alert').css({visibility: 'visible', transitionDelay: '0s'})
    })
}


function initialAlert(){
    if ($(window).scrollTop() > 0){
        $('.initial-alert').css({visibility: 'hidden', transitionDelay: '0s'})
    }
}


$(window).scroll(function(){
    initialAlert()
})


$(document).ready(function() {
    $('.character').addClass(characterName[0])
    choiceCharacter()
    start()
    
})
