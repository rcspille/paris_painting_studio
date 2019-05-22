// STICKY SCROLL CLASS
if($(window).width() >= 400){
    (function($) {
        var element = $('.to_move_content'),
            header = $('#top_nav'),
            originalY = (element.offset().top) - 76;

        // Space between element and top of screen (when scrolling)
        var topMargin = 0;

        // Should probably be set in CSS; but here just for emphasis
        element.addClass('sticky');

        $(window).on('scroll', function(event) {
            var scrollTop = $(window).scrollTop();

            element.stop(false, false).animate({
                top: scrollTop < originalY
                    ? 0
                    : scrollTop - originalY + topMargin
            }, 0);
        });
    })(jQuery);
}
