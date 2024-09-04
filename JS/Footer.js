$(document).ready(function() {
    function checkVisibility() {
        var Element = $('.mid');
        var Window_Height = $(window).height();
        var Scroll_Top = $(window).scrollTop();
        var Element_Offset_Top = Element.offset().top;
        var Element_Height = Element.height();

        if (Scroll_Top + Window_Height > Element_Offset_Top && Scroll_Top<  Element_Offset_Top+ Element_Height) {
            Element.addClass('scrolling');
        } else {
            Element.removeClass('scrolling'); 
        }
    }

    $(window).on('scroll resize', checkVisibility);

    checkVisibility();
});


$(document).ready(function() {
    $('.mail-now').click(function() {
        $('.gmail-form').addClass('active');
    });

    $('.close-form').click(function() {
        $('.gmail-form').removeClass('active');
    });

    $('.gmail-form').click(function(event) {
        if ($(event.target).is('.gmail-form')) {
            $(this).removeClass('active');
        }
    });

    $('.ContactForm').on('submit', function(event) {
        var email = $('.email').val();
        var mail_format= /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        
        if (!mail_format.test(email)) {
            alert('Please enter a valid Gmail address.');
            event.preventDefault(); 
        }
        else
        {
            alert('Email sent successfully!!!')
        }
    });
});