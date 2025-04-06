document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    const imageSection = document.querySelector('.image-section img');
    const detailsBox = document.querySelector('.details-box');
    const thankNoteBox = document.querySelector('.thank-note-box');
    const circle = document.querySelector('.circle');

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    document.addEventListener('mousemove', function (e) {
        targetX = e.clientX;
        targetY = e.clientY + 20; // Adjust the circle position to be below the mouse pointer
    });

    function animate() {
        mouseX += (targetX - mouseX) * 0.1;
        mouseY += (targetY - mouseY) * 0.1;

        gsap.to(circle, {
            x: mouseX - circle.offsetWidth / 2,
            y: mouseY - circle.offsetHeight / 2,
            duration: 0.1,
            ease: 'power3.out'
        });

        gsap.to(container, {
            rotationX: (mouseY - window.innerHeight / 2) * 0.02,
            rotationY: (mouseX - window.innerWidth / 2) * -0.02,
            duration: 0.5,
            ease: 'power3.out'
        });

        gsap.to([leftSide, rightSide], {
            x: (mouseX - window.innerWidth / 2) * 0.05,
            y: (mouseY - window.innerHeight / 2) * 0.05,
            duration: 0.5,
            ease: 'power3.out'
        });

        gsap.to(imageSection, {
            x: (mouseX - window.innerWidth / 2) * 0.1,
            y: (mouseY - window.innerHeight / 2) * 0.1,
            duration: 0.5,
            ease: 'power3.out'
        });

        gsap.to(detailsBox, {
            x: (mouseX - window.innerWidth / 2) * 0.15,
            y: (mouseY - window.innerHeight / 2) * 0.15,
            duration: 0.5,
            ease: 'power3.out'
        });

        gsap.to(thankNoteBox, {
            x: (mouseX - window.innerWidth / 2) * 0.2,
            y: (mouseY - window.innerHeight / 2) * 0.2,
            duration: 0.5,
            ease: 'power3.out'
        });

        requestAnimationFrame(animate);
    }

    animate();
});