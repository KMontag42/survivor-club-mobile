$(document).ready(function() {
    $('#rules').find('.nav-tabs li').bind('click', function(e) {
        var target = $(e.target);
        console.log(target);
    });
});
