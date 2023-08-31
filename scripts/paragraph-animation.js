const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-paragraphs');
            entry.target.classList.add('show-image')
        }
        else {
            entry.target.classList.remove('show-paragraphs');
        }
    })
})

const hiddenElements = document.querySelectorAll('.line-1, .line-2, .line-3, .line-4, .line-6, .line-7, .project-1, .project-2, .project-3, .html-icon, .css-icon, .javascript-icon, .whatsapp-logo, .linkedin-icon, .linkedin-icon-1, .email-icon');
hiddenElements.forEach((el) => observer.observe(el));