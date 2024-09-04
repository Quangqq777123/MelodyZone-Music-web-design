document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const songItems = document.querySelectorAll('#songList .song-item');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();

        songItems.forEach(function(item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});