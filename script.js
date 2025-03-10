function toggleHeart() {
    const heart = document.querySelector('.heart');
    const message = document.getElementById('message');

    heart.classList.toggle('liked');

    if (heart.classList.contains('liked')) {
        message.textContent = "Você clicou no coração!";
    } else {
        message.textContent = "Clique no coração!";
    }
}
