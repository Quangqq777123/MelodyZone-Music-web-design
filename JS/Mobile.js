$(document).ready(function() {
    function checkWidth() {
        if ($(window).width() < 1024) {
            $('.PC').addClass('hidden');
            $('.Mobile').removeClass('hidden');
            $('.link-bottom').addClass('hidden');
            $('.next-songs').addClass('animate__fadeInTopLeft');
            $('.topic-title').addClass('animate__backInLeft');
            $('.topic-main').addClass('animate__backInRight');
            $('.topic-footer').addClass('animate__backInLeft');
        } else {
            $('.PC').removeClass('hidden');
            $('.Mobile').addClass('hidden');
            $('.link-bottom').removeClass('hidden');
            $('.next-songs').addClass('animate__backInLeft');
            $('.topic-title').addClass('animate__backInLeft');
            $('.topic-main').addClass('animate__backInRight');
            $('.topic-footer').addClass('animate__backInLeft');
        }
    }
    checkWidth();
    $(window).resize(function() {
        checkWidth();
    });
    
    $('.MobileMenuIcon').click(function() {
        $('.full-screen-menu').removeClass('hidden').addClass('visible');
        $('.overlay').removeClass('hidden').addClass('visible');
    });

    $('.menu-close-icon').click(function() {
        $('.full-screen-menu').removeClass('visible').addClass('hidden');
        $('.overlay').removeClass('visible').addClass('hidden');
    });

    $('.overlay').click(function() {
        $('.full-screen-menu').removeClass('visible').addClass('hidden');
        $('.overlay').removeClass('visible').addClass('hidden');
    });

    $('.full-menu-items a').click(function() {
        $('.full-screen-menu').removeClass('visible').addClass('hidden');
        $('.overlay').removeClass('visible').addClass('hidden');
    });
});
function updateLoginStatus() {
    const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
    
    if (loggedIn) {
        $('#user-mobile').removeClass('hidden');
        $('#button-mobile').addClass('hidden');
    } else {
        $('#user-mobile').addClass('hidden');
        $('#button-mobile').removeClass('hidden');
    }
}

updateLoginStatus();
function logout() {
    sessionStorage.removeItem('loggedIn');
    updateLoginStatus();
}

updateLoginStatus();

$('#logout').on('click', function(e) {
    e.preventDefault(); 
    logout();
});

    