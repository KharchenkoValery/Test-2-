// ЗАДАНИЕ 1


// const regExp = /Регулярные выражения/
let regExp = /^[0-9]+$/;
const containsOnlyDigits = (str) => {
     // Ваш код
     if(regExp.test(console.log(value)))  {
        console.log("true")
    } else {
        console.log("false")
    }
}
console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false 

// ЗАДАНИЕ 2

let number= 0;
function counter () {
    if(number <= 100) {
     number++; 
     console.log("Прошла секунда"); 
      counterAnimation();
    }  
}
function counterAnimation() {
    setInterval(counter, 1000)
}
counterAnimation()


// ЗАДАНИЕ 3

let adad = document.querySelector(".adad")
 function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      adad.innerHTML = current;
      if (current == to) {
        clearInterval(timerId);
        // console.log(current);
      }
      current++;
      
    }, 1000);
    printNumbers(0, 10);
  }


// ЗАДАНИЕ 4

const block = document.querySelector(".block")

block.onclick = () => {
   
    if(block.style.backgroundColor = "") {
        block.onclick = () => {
            block.style.backgroundColor = "red";
        }  
    }
    else if( block.style.backgroundColor = "red") {
        block.onclick = () => {
            block.style.backgroundColor = "";
        }
    }  
}


// ЗАДАНИЕ 5

function dataJson() {
    const request = new XMLHttpRequest(); // 1. Создание запроса
request.open('GET', 'data.json') // 2. Указание метода запроса и указание пути
request.setRequestHeader('Content-Type', 'application/json')  // 3. Указание загаловка запроса
request.send() // 4. Отправка запроса


request.onload = () => {
    const data = JSON.parse(request.response);
    console.log(data);
}
}
dataJson()

