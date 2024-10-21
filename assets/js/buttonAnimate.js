const buttons = gsap.utils.toArray(".btn-primary");


buttons.forEach((button) => {
    let buttonTL = gsap.timeline({
        defaults: {
            duration: 0.3
        }
    });

    const leadingIcon = button.querySelector(".btn-leading-icon");
    const trailingIcon = button.querySelector(".btn-trailing-icon");
    const btnText = button.querySelector(".btn-text");
    const circle = button.querySelector(".decor-circle")


    buttonTL.pause();

    buttonTL
        .to(
            [button],
            {
                backgroundColor: 'var(--dark2)',
                duration: 0,
                ease: "none"
            }, 0
        )
        .to(
            [leadingIcon],
            {
                x: -32,
                xPercent: -100,
                opacity: 0,
                duration: 0.5
            }, "<"
        )
        .to(
            [btnText],
            {
                color: 'white',
                x: -32,
                duration: 0.3
            }, "<"
        )
        .to(
            [trailingIcon],
            {
                x: -16,
                xPercent: -100,
                rotate: 0,
                opacity: 1,
                duration: 0.3
            }, "<"
        );



    button.addEventListener("mouseenter", () => {
        buttonTL.play();
    });

    button.addEventListener("mouseleave", () => {
        buttonTL.reverse();
    });

    button.addEventListener("click", () => {
        let btnClickTL = gsap.timeline();

        btnClickTL
            .to(trailingIcon, {
                scale: 1.2,
                duration: 0.15,
                ease: "power1.out",
                yoyo: true,
                repeat: 1
            })
            .to(
                button,
                {
                    duration: 0.1,
                    opacity: 0.1,
                    yoyo: true,
                    repeat: 1
                }, "<"
            ).to(
                circle,
                {
                    scale: 2
                }, "<"
            ).to(
                circle,
                {
                    scale: 0,
                    opacity: 0,
                    ease: "power1.in",
                    duration: .5
                }
            )
            .to(
                circle,
                {
                    delay: .5,
                    opacity: 1, 
                    ease: "power1.in",
                    duration: .1
                }
            );
    });
});
