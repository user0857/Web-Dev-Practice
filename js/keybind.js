const validKeys = ['w', 'a', 's', 'd'];
const displayField = document.querySelector('#displayField');

const wButton = document.querySelector('#wButton');
const aButton = document.querySelector('#aButton');
const sButton = document.querySelector('#sButton');
const dButton = document.querySelector('#dButton');


function keyPressed(event){
    const key = event.key;

    if (validKeys.includes(key)){
        let para = document.createElement('p');
        para.textContent = `${key.toUpperCase()} is pressed!`;
        displayField.appendChild(para);
    }
}

function wkeyClicked(event){

    let para = document.createElement('p');
    para.textContent = `${event.path[0].textContent} is clicked!`;
    displayField.appendChild(para);
}

window.addEventListener("keydown", keyPressed);
wButton.addEventListener('click', wkeyClicked);
aButton.addEventListener('click', wkeyClicked);
sButton.addEventListener('click', wkeyClicked);
dButton.addEventListener('click', wkeyClicked);
