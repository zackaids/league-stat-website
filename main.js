// main.js

const buttons = document.querySelector('.buttons');
console.log(buttons.children);
for (const child of buttons.children) {
    child.addEventListener('click', handleClick)
}
function handleClick(e) {
    window.location.pathname = `${e.target.className}.html`;
}