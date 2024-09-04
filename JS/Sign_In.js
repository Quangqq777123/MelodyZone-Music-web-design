$(document).ready(function() {
    const validUsername = "huy";
    const validPassword = "123";

    const previousPage = document.referrer;
    sessionStorage.setItem('previousPage', previousPage);

    $('#btn').on('click', function(event) {
        event.preventDefault();
        const username = $('.User').val();
        const password = $('.Password').val();

        if (username === validUsername && password === validPassword) {
            sessionStorage.setItem('loggedIn', 'true');

            const previousPage = sessionStorage.getItem('previousPage');

        if (previousPage && !previousPage.includes('SignIn.html') && !previousPage.includes('SignUp.html')) {
    window.location.href = previousPage;
        } 
        else
        {
            window.location.href = "../Homepage/HomePage.html"; 
        }
        } else {
            alert("Username or password is incorrect! Please try again!!");
        }
    });
});