$(document).ready(function() {

    var handle_click = function(target) {
        console.log(target);
    };

    $('.navbar li').bind('click', function(e) {
        e.preventDefault();
        var target = $(e.target),
            active = $('.navbar .active');

        if(target.hasClass('fa')) {
            if (!target.parent().parent().hasClass('active')) {
                target.parent().parent().addClass('active');
                active.removeClass('active');
                handle_click(target.parent().attr('href'))
            }
        } else {
            if (!target.parent().hasClass('active')) {
                target.parent().addClass('active');
                active.removeClass('active');
                handle_click(target.attr('href'))
            }
        }

    });
});