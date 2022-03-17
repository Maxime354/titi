const stars = 40;
const skyStars = document.getElementById("sky__stars");
const toggleAnimation = document.getElementById("toggle-animation");

// Generate stars randomly using absolute position
function createStars() {
    for (let i = 0; i < stars; i++) {
        let x = Math.floor(Math.random() * 100 + 1);
        let y = Math.floor(Math.random() * 100 + 1);
        const starPoint = document.createElement("div");
        starPoint.style.left = `${x}%`;
        starPoint.style.top = `${y}%`;
        skyStars.appendChild(starPoint);
    }
}



createStars();

// butoon to pause/play animation
toggleAnimation.addEventListener("click", playAnimation);
