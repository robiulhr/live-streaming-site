// -----------------------------------  main-first-slider ---------------------
(() => {
    $(document).ready(function () {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop: true,
            merge: true,
            nav: false,
            dots: false,
            margin: 10,
            videoWidth: "auto",
            videoHeight: 350,
            lazyLoad: true,
            center: true,
            video: true,
            onPlayVideo: true,
            responsive: {
                0: {
                    items: 1,
                },

                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                900: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1450: {
                    items: 4,
                }
            }
        });
        owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
        // $(".owl-carousel").owlCarousel();

    });
    // -----------------------------------  main-second-slider ---------------------
    $(document).ready(function () {
        var owl2 = $('.owl-carousel-2');
        owl2.owlCarousel({
            loop: true,
            merge: true,
            nav: false,
            dots: false,
            margin: 10,
            videoWidth: "auto",
            videoHeight: 350,
            lazyLoad: true,
            center: true,
            video: true,
            responsive: {
                0: {
                    items: 1,
                },

                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                900: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1450: {
                    items: 4,
                }
            }
        });
        owl2.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY > 0) {
                owl2.trigger('next.owl');
            } else {
                owl2.trigger('prev.owl');
            }
            e.preventDefault();
        });
        // $(".owl-carousel").owlCarousel();

    });
})()
