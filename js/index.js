$(document).ready(function() {

    FastClick.attach(document.body);

    var handle_click = function(target) {
        var active = $('.navbar .active');

        if(target.hasClass('fa')) {
            if (!target.parent().parent().hasClass('active')) {
                target.parent().parent().addClass('active');
                active.removeClass('active');
                draw_page(target.parent().attr('href'))
            }
        } else {
            if (!target.parent().hasClass('active')) {
                target.parent().addClass('active');
                active.removeClass('active');
                draw_page(target.attr('href'))
            }
        }
    },
    draw_page = function(page) {
        $('.page.active').addClass('hidden').removeClass('active');
        $(page).removeClass('hidden').addClass('active');
        window.location.hash = page;
    };

    if (window.location.hash != "") {
        var top_level_pages = ['#rules', '#episodes', '#game_day', '#users', '#castaways'];
        if (top_level_pages.indexOf(window.location.hash) > -1) {
            $('a[href="'+window.location.hash+'"]').parent().addClass('active');
            draw_page(window.location.hash);
        }
    }

    $('.navbar li').bind('click', function(e) {
        e.preventDefault();
        var target = $(e.target);

        handle_click(target)
    });

    if (!window.navigator.standalone) {
        $("#mobile").addClass('hidden');
        $("#desktop").removeClass('hidden');
    }
});
