// -----------------------------------ЗАДАНИЕ №1-------------------------------------------------

let stroka = "a1fg5hj6"
let test = stroka.replace(/\D/g,'')
console.log(test);

// -----------------------------------ЗАДАНИЕ №2-------------------------------------------------

var n = 13; // Сколько элементов хотим получить
var fibonacci = [0, 1]; // Первые два элемента последовательности Фибоначчи

for (i = 2; i < n; i ++) {
  // Получаем i-й элемент последовательности как сумму предыдущих двух
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci.slice(0,n));
// slice отрезает от массива первые n элементов, если n < 2

// -----------------------------------ЗАДАНИЕ №3-------------------------------------------------

const city = document.querySelector(".city")
const URL = 'https://fakestoreapi.com/products'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

const APISearch = async () => {
     
       const asyncAwait = await fetch('${URL}')
       const awaitResponse = await response.json()
         
      
       asyncAwait.forEach(element => {
        console.log(element.title);
       });
        
    
}
APISearch()

// -----------------------------------ЗАДАНИЕ №4-------------------------------------------------

document.getElementById("div").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log(e.target.innerText);
      document.body.style.backgroundColor = e.target
    }
  });

// -----------------------------------ЗАДАНИЕ №5-------------------------------------------------

const modalTriggerBtn = document.querySelector(".hide");
const blockParent = document.querySelector(".blockParent");
const modalCloseBtn = document.querySelector(".hide")
const block = document.querySelector(".block")

const openModal = () => {
    document.body.style.display = 'block';
    block.style.overflow = 'hidden';
}

const closeModal = () => {
    document.body.style.display = 'none';
    block.style.overflow = '';
}

modalTriggerBtn.onclick = () => {
    openModal();
}

modalCloseBtn.onclick = () => {
    closeModal();
}
modalTriggerBtn.onclick = (event) => {
    if (event.target === block) {
        closeModal(); 
    }
   
}

// -----------------------------------ЗАДАНИЕ №6-------------------------------------------------


let second = document.querySelector(".seconds");

//  function printNumbers(from, to) {
//     let current = from;
  
//     let timerId = setInterval(function() {
//       second.innerHTML= current;
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 100);
//     printNumbers(0, 100);
//   }

  const rekursia = () => {
    second = 0
    if(second <= 100)
        i++
    numberInterval()
  }
  numberInterval(
    setInterval(rekursia, 100)
  )
  numberInterval()



// -----------------------------------ЗАДАНИЕ №7-------------------------------------------------

const send = document.querySelector(".getJson")

const teaData = async () => {
          send.onclick = async (event) => {
            const asyncAwait = await fetch('../data/tea.json')
            const awaitResponse = await response.json()
              teainfo.forEach((tea) => {
          console.log(tea.name, `\n`,`\n`, tea.facts);
             
              })
             } 
            }
  teaData()