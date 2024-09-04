$(document).ready(function() {
    function Play() {
        var audio = document.querySelector('.audio');
        if (audio && audio.paused) {
            audio.play();
        }
    }

    function Show_Adv_and_Auto_run_music() {
        var adv = sessionStorage.getItem('adv') === 'true';

        if (!adv) {
            $('.full-screen-adv').removeClass('hidden');

            $(".exit-adv").off('click').on('click', function() {
                sessionStorage.setItem('adv', 'true');
                $('.full-screen-adv').addClass('hidden');
                Play();
            });

        } else {
            if (Math.random() <= 0.3) 
                {
                $('.full-screen-adv').removeClass('hidden');

                $(".exit-adv").off('click').on('click', function() {
                    $('.full-screen-adv').addClass('hidden');
                    Play();
                });
            } 
            else
             {
                $('.full-screen-adv').addClass('hidden');
                Play(); 
            }
        }
    }

    Show_Adv_and_Auto_run_music(); 

});
document.addEventListener('DOMContentLoaded', () => {
    const autoplayToggle = document.getElementById('autoplay-toggle');
    if (autoplayToggle) {
        autoplayToggle.checked = localStorage.getItem('autoplay') === 'true';

        autoplayToggle.addEventListener('change', () => {
            localStorage.setItem('autoplay', autoplayToggle.checked);
        });
    }

    const audio = document.querySelector('.audio');
    const nextSongs = document.querySelectorAll('.next-songs-main li');

    if (audio) {
        audio.addEventListener('ended', () => {
            if (autoplayToggle && autoplayToggle.checked) {
                const nextSong = nextSongs[0];
                if (nextSong) {
                    const pageUrl = nextSong.getAttribute('data-page');
                    if (pageUrl) {
                        window.location.href = pageUrl; 
                    }
                }
            }
        });
    }
});