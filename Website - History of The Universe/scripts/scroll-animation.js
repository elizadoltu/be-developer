const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.add('show-image')
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})


const hiddenElements = document.querySelectorAll('.big-bang-theory, .string-theory, .m-theory, .theory-of-relativity, .block-universe-theory, .chaos-theory, .time-traveling, .many-worlds-interpretation, .multiverse-theory, .youtube-list, .physicist-list, .institutions-list');
hiddenElements.forEach((el) => observer.observe(el));