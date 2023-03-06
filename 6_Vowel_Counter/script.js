const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowel)


function countVowel() {
    const text = document.querySelector(".input-text").value;
    const word = text.trim();

    let vowelCount = 0;
    let wordVal = word.toLowerCase();
    
    for (let i=0; i< wordVal.length; i++){
        let letter = wordVal[i];
        if (letter.match(/([a,e,i,o,u])/)){
            vowelCount++;
        }
    }

    result.innerHTML = `${(word.toUpperCase())} has ${(vowelCount)} vowels`;
}

          
        