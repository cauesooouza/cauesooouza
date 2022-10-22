const header = document.querySelector('header');

function checkIsMobile() {
   return (window.outerWidth <= 425);
}

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
},
    {
        threshold: checkIsMobile() ? 0.25 : 0.5,
        rootMargin: checkIsMobile() ? '0px' : '-150px'
    }

);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e) => observer.observe(e));

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll) {
        header.classList.remove("down")
    } else if (currentScroll < lastScroll) {
        header.classList.add("down")
    }
    lastScroll = currentScroll;
});