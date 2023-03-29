
// carrosel de imagens
$(document).ready(() => {
    $('.carouselImages').slick({ 
        autoplay: true
    })

    // funcionamento do botão do menu
    $('.menuButton').click(() => {
        $('nav').slideToggle()
    })
})

