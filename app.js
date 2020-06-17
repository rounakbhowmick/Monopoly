//Event Listener
player1_button.addEventListener('click', rollDice_1);
player2_button.addEventListener('click', rollDice_2);
//Objects
let player1 = ["Pro", 0, 1000];
let player2 = ["FP", 0, 1000];

//Player 1
function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1; //Generating values from 1 to 6
    console.log("Player one rolls", position)
    changePosition_1(player1[1], position);
}
//Player 2
function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("Player two rolls", position)
    changePosition_1(player2[1], position);
}


//Update player 1 and player 2
function changePosition_1(old, currentPos) {
    let newPosition = old + currentPos;
    player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}

function changePosition_1(old, currentPos) {
    let newPosition = old + currentPos;
    player2[1] = newPosition;
    console.log(player2[1]);
    updateMoney_1(player2[1]);
}


//Update the money
function updateMoney_1(p1) {
    let updateMoney = 0;
    if (p1 < board.length)
        updateMoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15; //When 
        updateMoney = player1[2] - board[p1 - 1];
    }

    console.log(updateMoney);
}