const contriol = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
contriol.addEventListener('input', onControlMove)
function onControlMove(event){
    text.style.fontSize = event.currentTarget.value + "px"

}