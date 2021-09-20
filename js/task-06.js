let input = document.querySelector('#validation-input')
input.addEventListener('blur', onInputBlur)
const inputLength = input.getAttribute("data-length")


function onInputBlur(event){
 if(event.currentTarget.value.length != inputLength) {
    
     input.classList.add('invalid');
     
 } else {
    
    input.classList.remove('invalid');
    input.classList.add('valid');
}
}