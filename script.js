
// body
let bodyTag = document.querySelector('body');

// container div
container = document.querySelector('.container');
container.style['border'] = '1px solid black';
container.style['height'] = '450px';
container.style['width'] = '450px';
container.style['display'] = 'grid';
container.style['margin'] = 'auto';

//prompt user
let user;


// main
function etchAsketch() {
    let value = getInputValue(userCall());
    createDiv(value);
}


function userCall() {
    user = prompt('Enter number of divs:');
}

function getInputValue() {
    return user * user;
}

function generateColumns() {
    container.style['grid-template-columns'] = `repeat(${user}, auto)`;
}

// Create divs
function createDiv(value) {
    generateColumns(value);
    for (let i = 0; i < value; i++) {

        // create smaller divs in the container div
        let smallDivs = document.createElement('div');
        smallDivs.style['border'] = '1px solid gray';

        // event listener upon mouse enter
        smallDivs.addEventListener("mouseenter", function (event) {
            event.target.style.backgroundColor = 'black'
        })
        container.appendChild(smallDivs);
    }
}

// reset button
let resetButton = document.querySelector('.reset')

resetButton.onclick = () => {
    container.innerHTML = "";
    etchAsketch();
}
etchAsketch();


//  createDiv(userCall());

//  // remove the small divs created
//  
//     resetButton = onclick = () => {
//     container.innerHTML = "";
//     user = prompt('Enter number of divs:');
//     container.style['grid-template-columns'] =`repeat(${user}, auto)`;
//     let value = user*user;
//     createDiv(value);
//}
//     container.remove()
//     user = prompt('Enter number of divs:');
//     container.style['grid-template-columns'] =`repeat(${user}, auto)`;
//     value = user*user;
//     createDiv(value);
//}