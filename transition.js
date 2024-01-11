const hero = document.getElementById("hero");
const heroSection = document.getElementById("index-header");

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      hero.classList.add("hero-transition");
    }
  });
});

heroObserver.observe(heroSection);
