 
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const list =  document.getElementById("boxes")

let inputValue; 


input.addEventListener("input", onInput);
function onInput(e) {
  inputValue = e.target.value;
  console.log(inputValue);
}

createBtn.addEventListener("click", onClick)

function onClick(e){
  list.innerHTML = '';

  if(inputValue > 100){
    alert('Too much') 
    return 
  }

  createBoxes(inputValue)
  input.value = '';
}

function createBoxes(amount){
  for (let i = 0; i < amount; i += 1 ){
   const box = document.createElement('div');

   box.style.width = '30px'
   box.style.height = '30px'
   box.style.backgroundColor = getRandomHexColor1() 
   list.appendChild(box)



  }
 }
 
 function getRandomHexColor1() {
   return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
 }


destroyBtn.addEventListener("click", onDestroy)

function onDestroy(){
  list.innerHTML = '';
}

////1.[data-create]
////2.global inputValue
////3.reset is nily for the forms 




