const pillButtons = document.querySelectorAll('.selector li');
const indicator = document.querySelector('.indicator');

// Function to update the pill's position and size with GSAP
const updatePillPosition = () => {
    const activeButton = document.querySelector('.selector li.active');
    if (activeButton) {
        // Get the position, width, and height of the active button
        const { left, top, width, height } = activeButton.getBoundingClientRect();
        const wrapper = document.querySelector('.selector');
        const { left: wrapperLeft, top: wrapperTop } = wrapper.getBoundingClientRect();

        // Calculate the position relative to the wrapper
        const relativeLeft = left - wrapperLeft;
        const relativeTop = top - wrapperTop;

        selectorTL = gsap.timeline();

        // Animate the indicator to match the active button's properties
        selectorTL
            .to(indicator, {
                left: relativeLeft,
                top: relativeTop,
                width: width,
                height: height,
                ease: 'none',
                duration: 0.1
            })
            .to(".active", {
                ease: 'none',
                color: 'white',
                fontWeight:600,  
                duration: 0.1
            }, "<")
            .to(".selector li:not(.active)", {
                ease: 'none',
                color: 'var(--dark-600)',
                fontWeight:500,                
                duration: 0.1
            }, "<");
    }
};

// Event listeners for pillButtons
pillButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove active class from all pillButtons
        pillButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        // Update the position and size of the indicator
        updatePillPosition();
    });
});

// Initialize the position on page load
updatePillPosition();

window.addEventListener('resize', () => {
    updatePillPosition();
});