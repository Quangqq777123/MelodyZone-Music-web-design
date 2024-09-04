$(document).ready(function() {
    function updateLoginStatus() {
        const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
        
        if (loggedIn) {
            $('#user').removeClass('hidden');
            $('#buttons').addClass('hidden');
            $('#user-mobile').removeClass('hidden');
            $('#button-mobile').addClass('hidden');
            $('#logout').removeClass('hidden');
        } else {
            $('#user').addClass('hidden');
            $('#buttons').removeClass('hidden');
            $('#user-mobile').addClass('hidden');
            $('#button-mobile').removeClass('hidden');
            $('#logout').addClass('hidden');
        }
    }

    function logout() {
        sessionStorage.removeItem('loggedIn');
        updateLoginStatus();
    }
    updateLoginStatus();
    $(document).on('click', '#logout', function(e) {
        e.preventDefault();
        logout();
    });
});