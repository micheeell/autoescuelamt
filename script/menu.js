$(document).ready(function() {
    var $menu = $('.circle a');
    var nb_items = $menu.length,
        dilat_vert = 33.3333,
        dilat_hor = 50;
    $menu.each(function(el) {
        var $item = $(this);
        var index = $item.index();
        $item.css({
            top: (50 - dilat_vert*Math.sin(Math.PI/2 + index/(nb_items-1)*Math.PI)).toFixed(4) + '%',
            left: (15 - dilat_hor*Math.cos(Math.PI/2 + index/(nb_items-1)*Math.PI)).toFixed(4) + '%'
        });
    });
    $('#wheel').click(function(e) {
        e.preventDefault();
        $('.circle').toggleClass('open');
    });
});
