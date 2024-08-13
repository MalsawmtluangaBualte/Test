function flipCard() {
    const card = document.querySelector('.card');
    const message = document.querySelector('.message');
    const music = document.getElementById('background-music');
    
    card.classList.add('flip');
    
    // Show the message and play the music after the animation
    setTimeout(() => {
        message.style.display = 'block';
        music.play();
    }, 3000); // 3 seconds for rotation
}
