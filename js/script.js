$(window).on("load", function () {

    $(".loader .inner").fadeOut(2000, function () {
        $(".loader").fadeOut(1000)
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

});


$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["UiPath Expert Rpa Developer","Blue Prism Ad01 Certified", "Generative Ai Enthusiast","Agentic Ai","Excel Automation Expert"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1500,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 10,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    })



    var skillTopOffset = $('.skillSection').offset().top;
    var statsTopOffset = $('.statSection').offset().top;
    var countUpFinsised = false;
    const options = {
        duration: 60,
    };


    $(window).scroll(function () {

        if (window.pageYOffset > skillTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                //your options goes here
                easing: 'easeInOut',
                barColor: '#E7DF86',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent))
                }
            });

        }

        if (!countUpFinsised && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $('.counter').each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());

                let demo = new CountUp(element, endVal, options);
                if (!demo.error) {
                    demo.start();
                } else {
                    console.error(demo.error);
                }

                element.countup(endVal)
            })

            countUpFinsised = true;
        }

    });

    $("[data-fancybox]").fancybox();


    $("#filters a").click(function () {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }

        });

        return false;
    });

    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        const body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px")
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0)
            body.removeClass("fixedNav");
        }
    }


});
