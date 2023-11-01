// main.js
tslint:disabled

const buttons = document.querySelector('.buttons');
console.log(buttons.children);
for (const child of buttons.children) {
    child.addEventListener('click', handleClick)
}
function handleClick(e) {
    window.location.pathname = `${e.target.className}.html`;
}

const goToMain = document.querySelector('.nav-logo');

goToMain.addEventListener("click", clickImg);
function clickImg() {
    document.location.pathname = '/index.html'
}

function createRipple(event) {

}

const rippleButton = event.currentTarget;
const circle = document.createElement("span");
const diameter = Math.max(button.clientWidth, button.clientHeight);
const radius = diameter / 2;

circle.style.width = circle.style.height = `${diameter}px`;
circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
circle.classList.add("ripple");

const ripple = button.getElementByClassName("ripple")[0];

if (ripple) {
    ripple.remove();
}

button.appendChild(circle);

const rippleButtons = document.getElementsByClassName("buttons");
for (const rippbleButton of rippleButtons) {
    document.addEventListener("click", createRipple);
}