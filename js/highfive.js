// variables initialization
let point = 0;
const dispalyField = document.querySelector('#displayField');
const leftButton = document.querySelector('#leftButton');
const rightButton = document.querySelector('#rightButton');
const resetButton = document.querySelector('#resetButton');
const pointTitleFloatReset = document.querySelector('#floatReset');
// init points to 0 point
const points = document.querySelector('#points');
points.textContent = 0;

// the function capture the button press event for left button.
function leftButtonPressed(){
    let para = document.createElement('p');
    para.textContent = 'Left hand highfive!';
    dispalyField.appendChild(para);
    points.textContent++;
    checkGame();
}

// the function capture the button press event for right button.
function rightButtonPressed(){
    let para = document.createElement('p');
    para.textContent = 'Right hand highfive!';
    dispalyField.appendChild(para);
    points.textContent++;
    checkGame();
}

// check the game status
function checkGame(){
    var points_int = Number(points.textContent);
    if (points_int === 5){
        let winMsg = document.createElement('p');
        winMsg.textContent = 'You win!';
        dispalyField.appendChild(winMsg);

        // disable two buttons after winning the game
        leftButton.setAttribute('disabled', 'disabled');
        rightButton.setAttribute('disabled', 'disabled');
    }
}

// reset the game and clear the display field
function resetGame(){
    points.textContent = 0;

    // enable the buttons if they are disabled already
    leftButton.removeAttribute('disabled');
    rightButton.removeAttribute('disabled');

    // clean up all the text played in previous round
    while (dispalyField.lastChild !== pointTitleFloatReset){
        dispalyField.removeChild(dispalyField.lastChild);
    }

}

// set up listener for buttons 
leftButton.addEventListener('click', leftButtonPressed);
rightButton.addEventListener('click', rightButtonPressed);
resetButton.addEventListener('click', resetGame);