const numBtn = document.querySelectorAll(".btn");
const display = document.querySelector("#expression");
const clear = document.getElementById("clear");
const solve = document.getElementById("solve");

numBtn.forEach(elem =>{
    elem.onclick =()=>{display.value += elem.innerHTML;};
});

clear.addEventListener("click",()=> display.value = "");

//add Event Listener do not override  while onclick do

solve.onclick = ()=>{
    display.value = eval(display.value);
};