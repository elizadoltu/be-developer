const title = document.querySelector('.string-theory-title');
const firstPicture = document.querySelector('.first-picture-string');
const secondPicture = document.querySelector('.second-picture-string');

title.addEventListener('mouseover', () => {
    firstPicture.classList.add('left');
    secondPicture.classList.add('right');
});

title.addEventListener('mouseout', () => {
    firstPicture.classList.remove('left');
    secondPicture.classList.remove('right');
});