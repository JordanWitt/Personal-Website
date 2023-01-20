//CURSOR
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('#circularCursor').css({
            left: e.pageX,
            top: e.pageY
        });
    })
});