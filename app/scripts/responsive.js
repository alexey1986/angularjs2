(function ($) {
    $(document).scroll(function(){
        var nav = $('#navbar'),
            body = $('body');

        if (body.scrollTop() > 0 ) {
            nav.addClass('navbar-fixed-top');
            body.css('padding-top', 144);
        } else {
            nav.removeClass('navbar-fixed-top');
            body.css('padding-top', 0);
        }
    });
})(jQuery);