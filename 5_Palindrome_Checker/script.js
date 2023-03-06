const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome)


function palindrome(){
    const text = document.querySelector(".input-text").value;
    const word = text.trim();
    let len = word.length;

    let start = word.substring(0, Math.floor(len/2)).toLowerCase();
    let end = word.substring(len - Math.floor(len/2), Math.floor(len)).toLowerCase();

    let flipEnd = end.split("").reverse().join("");
    
    if (start == flipEnd){
        result.innerHTML = `${word.toUpperCase()} is a palindrome `;
    } else {
        result.innerHTML = `${word.toUpperCase()} is not a palindrome `;
    }
    // console.log(flipEnd);
}

function strip(string) {
    return string.replace(/^\s+|\s+$/g, '');
        }
          
        