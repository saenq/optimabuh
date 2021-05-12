let upButton = $("#b-upButton");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        if (upButton.css('bottom').replace('px', '') <= -upButton.height()) {
            let i = -upButton.height();
            function myLoop() {
                setTimeout(function () {
                    upButton.css({ 'bottom': `${i}px` });
                    i++;
                    if (i <= 0) {
                        myLoop();
                    }
                }, 5)
            }
            myLoop();
        }
    } else {
        if (upButton.css('bottom').replace('px', '') == 0) {
            let i = 0;
            function myLoop() {
                setTimeout(function () {
                    upButton.css({ 'bottom': `${i}px` });
                    i--;
                    if (i >= -upButton.height()) {
                        myLoop();
                    }
                }, 5)
            }
            myLoop();
        }
    }
}


$('.b-header__menu .b-menu__link, .b-upButton__btn').on('click', function () {
    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});