const hasAnimationPlayed = localStorage.getItem('animationPlayed');

if (!hasAnimationPlayed) {
    
    const introTitle = document.querySelector('.introduction-title');
    introTitle.classList.add('animate-intro');
    localStorage.setItem('animationPlayed', true);
}