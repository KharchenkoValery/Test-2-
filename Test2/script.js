const input = document.querySelector("input");
const count = document.querySelector(".count");
const ostatok = document.querySelector(".ostalos")

function countLetters() {
    
    const text = input.value; 
    const textlength = input.value.length; 
    count.innerText = textlength; 
   let limit = 20;
    ostatok.innerText = limit - count.innerText;
    if (count.innerText == limit) {
        // document.body.style.backgroundColor = "red";
        input.disabled = true
    }
    
}