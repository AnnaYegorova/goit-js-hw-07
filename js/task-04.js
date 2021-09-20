const incBtn = document.querySelector("[data-action='increment']")
const decBtn = document.querySelector("[data-action='decrement']")
const valueEl = document.querySelector("#value")
let counterValue = 0;
const increment = () => {
    counterValue +=1;
    valueEl.textContent = counterValue;
}
const decrement = () => {
    counterValue -=1;
    valueEl.textContent = counterValue;
}
incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);