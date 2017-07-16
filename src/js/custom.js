$(document).ready(function() {

    $('.menuBtn').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('menuBtn--active');
        $('.header__nav').toggleClass('header__nav--active');
        $('.bodyWrapper').toggleClass('bodyWrapper--active');
    });

})