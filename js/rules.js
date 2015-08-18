$(document).ready(function() {
    $('#rules').find('.nav-tabs li').bind('click', function(e) {
        var target = $(e.target);
        $('.rule-page.active').removeClass('active');
        $('.rules-toc').addClass('hidden');
        $(target.attr('href')).removeClass('hidden').addClass('active');
    });

    $("#rules").find(".back").bind('click', function(e) {
        $('.rule-page.active').removeClass('active').addClass('hidden');
        $('.rules-toc').removeClass('hidden');
    });
});
