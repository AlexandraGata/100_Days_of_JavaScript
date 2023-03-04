const colorCode = document.querySelector(".code");
const button = document.querySelector(".randomize");

function generateColor(){
    const randomColor = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = "#" + randomColor;
    colorCode.innerHTML = "#" + randomColor;
}

button.addEventListener("click",generateColor);


