// main.js

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

// function createRipple(event) {

// }

// const rippleButton = event.currentTarget;
// const circle = document.createElement("span");
// const diameter = Math.max(button.clientWidth, button.clientHeight);
// const radius = diameter / 2;

// circle.style.width = circle.style.height = `${diameter}px`;
// circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
// circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
// circle.classList.add("ripple");

// const ripple = button.getElementByClassName("ripple")[0];

// if (ripple) {
//     ripple.remove();
// }

// button.appendChild(circle);

// const rippleButtons = document.getElementsByClassName("buttons");
// for (const rippbleButton of rippleButtons) {
//     document.addEventListener("click", createRipple);
// }


/*
name,
teams,
total games played,
kda,
kills per match
kill percentage%
DPM
*/


const url = "https://league-of-legends-esports.p.rapidapi.com";
async function getPlayerTeams() {
    const response = await fetch(`${url}/teams`, {
        headers: {
            'X-RapidAPI-Key': '3c27a0802amshd4a0aeac63bf17dp170384jsn79edec9cb087',
            'X-RapidAPI-Host': 'league-of-legends-esports.p.rapidapi.com'
        }
    });
    const data = await response.json();
    console.log(data);
};
getPlayerTeams();

// CRUD: CREATE-READ-UPDATE-DELETE
// create post
// read post
// update delete