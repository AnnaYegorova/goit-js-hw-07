const input = document.querySelector("#controls > input")
const renderBtn = document.querySelector('[data-action="render"]')
const destroyBtn = document.querySelector('[data-action="destroy"]')

renderBtn.addEventListener('click', ()=> createBoxes(input.value))
destroyBtn.addEventListener('click', ()=> destroyBoxes(input.value))

const randomColor = () =>{
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}
const size = 30;
const createBoxes = (amount) =>{
    for(let i = 1; i<=amount; i+=1){
    const boxesLink = document.querySelector('#boxes')
    const boxes = document.createElement('div')
    boxesLink.appendChild(boxes)
    boxes.style.width = size+10*i+"px";
    boxes.style.height = size+10*i+"px"; 
    boxes.style.backgroundColor = randomColor();
   }
}
const destroyBoxes = (amount) => {
   
    input.value = "" 
    const boxesLink = document.querySelector('#boxes')
    const boxes = document.createElement('div')
    for(let i = 1; i<=amount; i+=1){
         boxesLink.innerHTML = ""
    
}}
