const imgs = document.querySelectorAll('.js-img');
const wrappers = document.querySelectorAll('.js-wrapper');

const options = {
  threshold: 0.3,
  rootMargin: '0px 0px -200px 0px',
};

const appearOnScroll = function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const elem = entry.target;

    elem.classList.add('appear');
    elem.classList.add('slide-down');

    appearOnScroll.unobserve(elem);
  });
};

const observer = new IntersectionObserver(appearOnScroll, options);

imgs.forEach((img) => observer.observe(img));
wrappers.forEach((wrapper) => observer.observe(wrapper));
