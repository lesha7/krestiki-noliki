const winPatterns = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
];
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function place(button) {
    let index = button.id - 1;
    if (gameBoard[index] === "") {
        button.textContent = currentPlayer;
        gameBoard[index] = currentPlayer;
        checkWin();
        switchPlayer();
    }
}

function checkWin() {
    for (let i = 0; i < winPatterns.length; i++) {
        let pattern = winPatterns[i];
        let firstIndex = pattern[0] - 1;
        let secondIndex = pattern[1] - 1;
        let thirdIndex = pattern[2] - 1;
        if (gameBoard[firstIndex] === currentPlayer &&
            gameBoard[secondIndex] === currentPlayer &&
            gameBoard[thirdIndex] === currentPlayer) {
            alert(`Игрок ${currentPlayer} выиграл!`);
            reset();
            break;
        }
    }
    if (!gameBoard.includes("")) {
        alert("Ничья!");
        reset();
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function reset() {
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = "";
    }
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
}