$(document).ready(function(){
    function helpMenu(){
        if($(window).width()>1023)
        {
            $('.Mobile').hide();
        }
        else
        {
            $('.Mobile').show();
        }
    }

    helpMenu();

    $(window).resize(function() {
        helpMenu();
    });

});