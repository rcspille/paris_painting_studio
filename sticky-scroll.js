var fixmeTop = $('#call_panel').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('#call_panel').css({
            position: 'fixed',
            top: '200',
            left: '0'
        });
    } else {
        $('#call_panel').css({
            position: 'static'
        });
    }
});
