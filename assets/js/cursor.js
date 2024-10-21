const circleElem = document.querySelector('.circle');

const mouse = { x: 0, y: 0 };
const prevMouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };
let currentScale = 0;
let currentAngle = 0;

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
})

const speed = 0.17;

const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    const posTransform = `translate(${circle.x}px, ${circle.y}px)`;

    //squeeze
    const dX = mouse.x - prevMouse.x;
    const dY = mouse.y - prevMouse.y;

    prevMouse.x = mouse.x;
    prevMouse.y = mouse.y;

    //calc distance using pythogoras theorem, using distance as mouse velocity
    const dist = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2))

    // Math.min is used to limit the distance to get velocity to a range between 0 to 150
    const mouseVelocity = Math.min(dist, 150);

    //scale of both dimension max is .5x to 1.5x, convert the velocity from range [0, 150] to [0, .5]
    const scaleFactor = mouseVelocity / 150 * .5;

    //to make the animation smooth, like for mouse position, set the scale for each frame, divide by speed
    currentScale += (scaleFactor - currentScale) * speed * 3;

    const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`

    // calculate angle
    const angle = Math.atan2(dY, dX) * 180 / Math.PI;

    if (mouseVelocity > 20) {
        currentAngle = angle;
    }
    
    currentAngle += (angle - currentAngle) * speed * 8;
    
    const rotTransform = `rotate(${currentAngle}deg)`;

    circleElem.style.transform = `${posTransform} ${rotTransform} ${scaleTransform}`;

    window.requestAnimationFrame(tick);
}

tick();