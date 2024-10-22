const menuBtn = document.getElementById('menu');
const navWrapper = document.getElementById('nav-wrapper');
let menuActive = false;


const navbarTL = gsap.timeline({
    defaults: {
        ease: "power2.out",
        duration: .3
    }
});

navbarTL.pause();

navbarTL.to([navWrapper],
    {
        x: 0,
        opacity: 1,
        duration: .6
    })
    .to(menuBtn,
        {
            color: 'white'
        }, "<"
    )
    .to('.nav-link',
        {
            padding: 'var(--spacer-2)',
            stagger: .1
        }, "-=.5"
    );

const toggleMenu = () => {
    menuActive = !menuActive;
    refreshMenu();
};

const refreshMenu = () => {
    if (menuActive) {
        menuBtn.innerText = 'close';
        navbarTL.play();
    } else {
        menuBtn.innerText = 'menu';
        navbarTL.reverse();
    }
}


menuBtn.onclick = toggleMenu;

window.addEventListener('resize', handleResize);
window.addEventListener('orientationchange', handleResize);

function handleResize() {
    refreshMenu();

    // Check if menu is active and menu button is not visible
    if (window.getComputedStyle(menuBtn).display === 'none') {
        gsap.to(navWrapper, {
            x: 0,
            opacity: 1,
            duration: 0.6
        });
        gsap.to('.nav-link', {
            x: 0,
            padding: 0
        });
    }
}


const smoothScroll = (target) => {

    if (menuActive && window.getComputedStyle(menuBtn).display !== 'none') {
        toggleMenu();
        setTimeout(() => {
            lenis.scrollTo(target);
        }, 200); // Wait until menu is closed before scroll
    } else {
        lenis.scrollTo(target);
    }
};

