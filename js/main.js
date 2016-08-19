$(document).ready(function() {

    // Fixed navigation menu
    var secondaryHead = $('nav');
    var secondaryHeadTop = secondaryHead.offset().top;
    $(window).on('scroll', function() {
        if($(window).scrollTop() > secondaryHeadTop) {
            secondaryHead.addClass("fixed-nav");
            $("nav ul").addClass("fixed-links");
        } else {
            secondaryHead.removeClass("fixed-nav");
            $("nav ul").removeClass("fixed-links");
        }
    });

    // Load items if located in viewport
    $('.post').addClass('hideme').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });

    // On arrow click, scroll down
    $('.main-title').delay(1000).animate({"opacity": "1"}, 700);
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.jumper').fadeOut();
            } else {
                $('.jumper').fadeIn();
            }
        });

        // Scroll animation, to href position
        $('.jumper').on("click", function(e) {
            e.preventDefault();

            $("body, html").animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 600);
        });
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
});