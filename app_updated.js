let board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
//Selecting all the player id
const player1_button = document.getElementById('player-1');
const player2_button = document.getElementById('player-2');
class Player {
    constructor(name, position, money) {
        this.name = name;
        this.position = position;
        this.money = money;
    }
    rollDice() {
        //Generating values from 1 to 6
        let pos = Math.floor(Math.random() * 6) + 1;
        console.log(pos);
        this.updatePosition(pos);
    }
    updatePosition(pos) {
        this.position += pos;
        console.log(this.position);
        this.updateMoney();
    }
    updateMoney() {
        if (this.position < board.length)
            this.money -= board[this.position];
        else {
            this.position %= 15; //"%" to  stay in board boundary
            this.money -= board[this.position] //Storing the money value
        }
        console.log(player1);
        console.log(player2);
    }
}

//Player object
let player1 = new Player("Rounak", 0, 1000);
let player2 = new Player("Mom", 0, 1000);
/*Add Event Listener*/
player1_button.addEventListener('click', function () {
    player1.rollDice();
}, false);
player2_button.addEventListener('click', function () {
    player1.rollDice();
}, false);