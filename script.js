
const enteredname = document.getElementById("entered-name");
const displayedname = document.getElementById("displayedname")
const submitbutton = document.getElementById("submit-button")

const bluebutton = document.getElementById("blue-button");
const redbutton = document.getElementById("red-button");

let stickercolor = document.querySelector("main");


submitbutton.addEventListener('click', () => {
    displayedname.textContent = enteredname.value;
    enteredname.value = '';
})

bluebutton.addEventListener('click', () =>{
    stickercolor.style.backgroundColor='blue';
})

redbutton.addEventListener('click', () =>{
    stickercolor.style.backgroundColor='red';
})