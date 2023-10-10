$(document).ready(function() {
    $('.header-menus__burger').click(function(event) {
        $('.header-menus__burger,.header-menus').toggleClass('active');
        $('body').toggleClass('lock');
    });
});