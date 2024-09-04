$(document).ready(function() {
    let current_slide = 0;
    const slide_length = $('.slide-img-screen > a').length;
    const wait_time = 3000; 
    let auto_slide;

    function updateSlide() {
        const offset = -current_slide * 100 / slide_length;
        $('.slide-img-screen').css('transform', `translateX(${offset}%)`);
        $('.slide-img-buttons button').removeClass('active');
        $(`.slide-img-buttons button:eq(${current_slide})`).addClass('active');
    }

    function startAutoSlide() {
        auto_slide = setInterval(function() {
            current_slide = (current_slide + 1) % slide_length;
            updateSlide();
        },wait_time);
    }

    function stopAutoSlide() {
        clearInterval( auto_slide);
    }

    $('#go-right').click(function() {
        stopAutoSlide(); 
        current_slide = (current_slide + 1) % slide_length;
        updateSlide();
        startAutoSlide(); 
    });

    $('#go-left').click(function() {
        stopAutoSlide(); 
        current_slide = (current_slide - 1 + slide_length) % slide_length;
        updateSlide();
        startAutoSlide();
    });


    startAutoSlide();
});