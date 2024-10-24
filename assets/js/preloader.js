const preloadTL = gsap.timeline();
const preloadBtn = document.querySelector('#preloader-btn');
const preloadWrapper = document.querySelector('#preloader-wrapper');
const preloadBG = document.querySelector('#preloader-bg');
const preloadWave = document.querySelector('#preloader-wave');
const preloader = document.querySelector('#preloader');

preloadTL
    .to(['#preloader-wrapper > *', preloadBG], {
        stagger: 0.3,
        y: '-100vh',
        duration: 1,
        ease: 'power3.inOut'
    })
    .to([preloadWave], {
        stagger: 0.3,
        yPercent: 100,
        duration: .5,
        opacity: 0,
        ease: 'power3.inOut'
    }, "<")
    .to(['#preloader'], {
        stagger: 0.3,
        y: '-150vh',
        duration: 1,
        ease: 'power3.inOut'
    });

preloadTL.pause();

preloadBtn.addEventListener('click', () => {
    preloadTL.play();
});

document.body.style.overflow = 'hidden';

function toggleOverflow() {
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'visible';
    } else {
        document.body.style.overflow = 'hidden';
    }
}