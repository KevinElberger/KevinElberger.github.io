$(document).ready(function() {

    $('.main-title').delay(1000).animate({"opacity": "1"}, 700);
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.jumper').fadeOut();
            } else {
                $('.jumper').fadeIn();
            }
        });

        $('.jumper').on("click", function(e) {
            e.preventDefault();

            $("body, html").animate({
                scrollTop: $($(this).attr('href')).offset().top -60
            }, 600);
        });
    })
});