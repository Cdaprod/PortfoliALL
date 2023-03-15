$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
    });

    // Initialize Rellax
    var rellax = new Rellax('.rellax');

    // Initialize Fancybox
    $('[data-fancybox="gallery"]').fancybox();

    // Initialize Slick Carousel for testimonials
    $('.testimonials-carousel').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // Smooth scrolling navigation
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
    });
});
