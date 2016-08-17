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
    })
});