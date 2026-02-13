let yesSize = 1;

function yesClick() {
    document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;flex-direction:column;height:100vh;background:#ff758c;">
            <h1 style="color:white;font-size:3rem;">YAYYYY ❤️🥰</h1>
            <p style="color:white;font-size:1.5rem;">I love you so much 💕</p>
        </div>
    `;
}

function moveButton() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    // Random move
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noButton.style.position = "absolute";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

    // Grow yes button forever
    yesSize += 0.25;
    yesButton.style.transform = `scale(${yesSize})`;
}

// Floating hearts
function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);
