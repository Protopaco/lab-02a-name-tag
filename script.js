
const enteredname = document.getElementById("entered-name");
const displayedname = document.getElementById("displayedname")
const submitbutton = document.getElementById("submit-button")

const pinkbutton = document.getElementById("pink-button");
const lightgreenbutton= document.getElementById("light-green-button");
const lightbluebutton = document.getElementById("light-blue-button");
const redbutton = document.getElementById("red-button");

let stickercolor = document.querySelector("main");
let buttoncolor = document.querySelector("button");
//let selectedcolor = document.querySelector("root");


submitbutton.addEventListener('click', () => {
    displayedname.textContent = enteredname.value;
    enteredname.value = '';
})

pinkbutton.addEventListener('click', () =>{
    document.documentElement.style.cssText = "--selected-color: pink";
})

lightgreenbutton.addEventListener('click', () =>{
    document.documentElement.style.cssText = "--selected-color: lightgreen";

})

lightbluebutton.addEventListener('click', () =>{
    document.documentElement.style.cssText = "--selected-color: lightblue";

})

redbutton.addEventListener('click', () =>{
    document.documentElement.style.cssText = "--selected-color: red";

})