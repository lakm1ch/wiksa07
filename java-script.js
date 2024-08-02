document.getElementById('scared-cat').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'ты меня ущемляешь';
    console.log('Click event triggered');
});

document.getElementById('brawlst-img').addEventListener('click', function() {
    const brawlstImg = document.getElementById('brawlst-img');
    const piperImg = document.getElementById('piper-img');
    const favoriteText = document.getElementById('favorite-text');

    brawlstImg.style.display = 'none'; // Скрыть изображение бравлст
    piperImg.style.display = 'block'; // Показать изображение пайпер
    favoriteText.style.display = 'block'; // Показать текст favorite?
});