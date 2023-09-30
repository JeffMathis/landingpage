const hirebtn = document.querySelector(".floating-btn");
const hiresection = document.querySelector(".cta");
const sectionFade = document.querySelectorAll(".section-fade");
const sectionObserved = document.querySelectorAll(".section-observed");
const sectionFadeRight = document.querySelectorAll(".section-fade-right")

const options = {
    threshold: 0.40
};

const sectionoptions = {
    threshold: .40
};

const hirebtnobserver = new IntersectionObserver(function(entries, hirebtnobserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            hirebtn.classList.remove("disappear");
        } else {
            hirebtn.classList.add("disappear")
        }
    });
}, options);

const sectionObserver = new IntersectionObserver(function (entries, sectionObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.add("fadeout");
        } else {
            entry.target.classList.remove("fadeout");
            entry.target.classList.add("fadein");
            sectionObserver.unobserve(entry.target);
        }
    });
}, sectionoptions);

hirebtnobserver.observe(hiresection);

sectionFade.forEach(sectionFade => {
    sectionObserver.observe(sectionFade);
});