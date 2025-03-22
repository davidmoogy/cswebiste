setInterval(createSnowflake, 30);

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄"; 

    const header = document.querySelector(".snowfall-header");
    header.appendChild(snowflake);

    let size = Math.random() * 15 + 5; 
    let startPosition = Math.random() * window.innerWidth; 
    let duration = Math.random() * 4 + 3; 
    let rotation = Math.random() * 360; 

    snowflake.style.left = `${startPosition}px`;
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}
