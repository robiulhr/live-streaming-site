// -----------------------------------  main-first-slider ---------------------
(() => {
    $(document).ready(function () {
        var owl = $('.owl-carousel#slider-1');
        owl.owlCarousel({
            loop: true,
            merge: true,
            nav: false,
            dots: true,
            margin: 10,
            videoWidth: "auto",
            videoHeight: 330,
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
        var owl = $('.owl-carousel#slider-2');
        owl.owlCarousel({
            loop: true,
            merge: true,
            nav: true,
            dots: false,
            margin: 10,
            videoWidth: "auto",
            videoHeight: 300,
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
})()
