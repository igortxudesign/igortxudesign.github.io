$(function (){
    $('.slider-bottom').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<button class='slick-main slick-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button class='slick-main slick-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.contact-open').click(function(e){
        e.preventDefault();
        $(this).closest('.header__bar').toggleClass('open');
    });



});