/*global $, document, window, lightbox, setTimeout, jQuery*/
$(document).ready(function () {

    'use strict';

    // ------------------------------------------------------- //
    // Navbar
    // ------------------------------------------------------ //
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('nav.navbar').addClass('active');
        } else {
            $('nav.navbar').removeClass('active');
            $('#navigation').removeClass('in');
        }
    });

    $('.navbar-toggle').click(function () {
        if (!$('nav.navbar').hasClass('active')) {
            $('nav.navbar').addClass('active');
        }
    });

    $('.navbar .link-scroll').click(function () {
        $('#navigation').removeClass('in');
    });

    // ---------------------------------------------- //
    // Scroll Spy
    // ---------------------------------------------- //
    $('body').scrollspy({
        target: '.navbar',
        offset: 120
    });

    // ---------------------------------------------- //
    // Preventing URL update on navigation link click
    // ---------------------------------------------- //
    $('.link-scroll').bind('click', function (e) {

        e.preventDefault();

        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 80
        }, 1000);
    });

    // ------------------------------------------------------- //
    // Lightbox initialization
    // ------------------------------------------------------ //
    lightbox.option({
        'resizeDuration': 400,
        'fadeDuration': 400,
        'alwaysShowNavOnTouchDevices': true
    });

    // ------------------------------------------------------- //
    // Testimonials Slider
    // ------------------------------------------------------ //
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    });

    // ------------------------------------------------------- //
    // Products Slider
    // ------------------------------------------------------ //
    $('.stories-slider').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    });


    // ------------------------------------------------------- //
    // Lightbox initialization
    // ------------------------------------------------------ //
    lightbox.option({
        'resizeDuration': 400,
        'fadeDuration': 400,
        'alwaysShowNavOnTouchDevices': true
    });

    // ------------------------------------------------------ //
    // Contact form validation
    // ------------------------------------------------------ //
    $('#contact-form').validate({
        messages: {
            username: 'please enter your name',
            useremail: 'please enter your email address',
            message: 'please enter your message'
        }
    });

    // ------------------------------------------------------ //
    // Hiding Form labels on focus
    // ------------------------------------------------------ //
    $('#contact-form input, #contact-form textarea').blur(function () {
        if ($(this).val() === '') {
            $(this).siblings('label').show();
        } else {
            $(this).siblings('label').hide();
        }
    });

    $('#contact-form input, #contact-form textarea').keydown(function () {
        $(this).siblings('label').hide();
    });

    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    if ($.cookie("theme_csspath")) {
        $('link#theme-stylesheet').attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            $('link#theme-stylesheet').attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, { expires: 365, path: '/' });
        }

        return false;
    });


});
