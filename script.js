
const enteredname = document.getElementById("entered-name");
const displayedname = document.getElementById("displayedname")
const submitbutton = document.getElementById("submit-button")

const pinkbutton = document.getElementById("pink-button");
const lightgreenbutton= document.getElementById("light-green-button");
const lightbluebutton = document.getElementById("light-blue-button");
const redbutton = document.getElementById("red-button");

let stickercolor = document.querySelector("main");


submitbutton.addEventListener('click', () => {
    displayedname.textContent = enteredname.value;
    enteredname.value = '';
})

pinkbutton.addEventListener('click', () =>{
    stickercolor.style.backgroundColor='pink';
})

lightgreenbutton.addEventListener('click', () =>{
    stickercolor.style.backgroundColor='lightgreen';
})

lightbluebutton.addEventListener('click', () =>{
    stickercolor.style.backgroundColor='lightblue';
})

redbutton.addEventListener('click', () =>{
    stickercolor.style.backgroundColor='red';
})