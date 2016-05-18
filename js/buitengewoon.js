/*$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});
*/

/* ************************* */
/* Make article items appear */
/* ************************* */

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll(function() {
        /* Check the location of each fadediv element */
        $('.fadediv').each(function(i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, remove the fadeout class and add the come-in class */
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass("fadeout");
                $(this).addClass("come-in");
            }
            else if (bottom_of_window < bottom_of_object) {
                $(this).addClass("fadeout");
                $(this).removeClass("come-in");
            }
        });
    });
});

/* ******** */
/* PARALLAX */
/* ******** */

 $(document).ready(function() {

    function draw() {
        requestAnimationFrame(draw);
        // Drawing code goes here
        scrollEvent();
    }
    draw();

});

function scrollEvent() {

    if (!is_touch_device()) {
        viewportTop = $(window).scrollTop();
        windowHeight = $(window).height();
        viewportBottom = windowHeight + viewportTop;

        if ($(window).width())

            $('[data-parallax="true"]').each(function() {
            distance = viewportTop * $(this).attr('data-speed');
            if ($(this).attr('data-direction') === 'up') {
                sym = '-';
            }
            else {
                sym = '';
            }
            $(this).css('transform', 'translate3d(0, ' + sym + distance + 'px,0)');
        });

    }
}

function is_touch_device() {
    /*return 'ontouchstart' in window // works on most browsers 
        || 'onmsgesturechange' in window; // works on ie10*/
}