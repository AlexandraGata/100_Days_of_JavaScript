const number = document.querySelector(".number");
const button = document.querySelector(".randomize");
const minValue = 0;
const maxValue = 10;


function getRandomInteger(min, max){
    number.innerHTML = Math.floor(Math.random()*(max-min)+1);
}

button.addEventListener("click", () =>{
   getRandomInteger(minValue, maxValue); 
});

getRandomInteger(minValue, maxValue);
