$(function() {

    $('.hamburger').click(function () {
        $(".hamburger").toggleClass('is-active');
        $("#nav").slideToggle().toggleClass("nav-active");

    });

    $(window).resize(function () {
        if ($(this).width() > 992) {
            $("#nav").addClass('nav-active');
            $('.humburher').addClass('is-active');

        }
        else {
            $("#nav").removeClass('nav-active');
            $('.humburher').removeClass('is-active');
        }
    });

    $(".companiesList").slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,



        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }

        ]
    });

});
