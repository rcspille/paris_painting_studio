var fixmeTop = $('#call_panel').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('#call_panel').css({
          #call_panel{
            width: 100%;
            padding: 20px 0;
            position: fixed;
            top: 100;
          }
        });
    } else {
        $('#call_panel').css({
          #call_panel{
            width: 100%;
            padding: 20px 0;
            position: absolute;
            bottom: 0;
          }
        });
    }
});
