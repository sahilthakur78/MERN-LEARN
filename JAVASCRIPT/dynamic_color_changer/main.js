const colorBtn = document.getElementById("colorBtn");
const sizeBtn = document.getElementById("sizeBtn");
const resetBtn = document.getElementById("resetBtn");
// Change background color
colorBtn.addEventListener("click" , () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
});

// Change font size
let size=16;
sizeBtn.addEventListener("click", () => {
    size=size+5;
    document.body.style.fontSize=size+"px";
});

// Reset everything
resetBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    document.body.style.fontSize = "16px";
});