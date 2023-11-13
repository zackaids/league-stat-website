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


// query parameters = ? in the url

const url = "https://oe.datalisk.io/stats/teams/byTournament?mapSide=all&winLoss=all&dateStart=2023-06-13&dateEnd=2023-07-22&tournament=LCS%2F2023%20Season%2FSummer%20Season&columnSet";
async function getLcsStandings() {
    const response = await fetch(url, {
        headers: {
            'X-Api-Key': 'f561197a-82ea-4e54-acd2-386979018a7a'
        }
    });
    const data = await response.json();
}

// getLcsStandings();


// CRUD: CREATE-READ-UPDATE-DELETE
// create post
// read post
// update delete