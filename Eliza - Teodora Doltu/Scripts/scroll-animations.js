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


const hiddenElements = document.querySelectorAll('.summary-section, .education-section, .projects-section, .certificates-section, .skills-section, .experience-section');
hiddenElements.forEach((el) => observer.observe(el));