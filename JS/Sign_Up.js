$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        
        var password = $('.Password').val();
        var confirmPassword = $('.ConfirmPassword').val();
    
        if (password === confirmPassword) {
            alert("Sign up complite!!");
            window.location.href = "../Login_site/SignIn.html";
        } else {
            alert("Passwords do not match!!!Please try again!!");
        }
    });
});