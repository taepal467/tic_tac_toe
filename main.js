const Players = (() => {
    const playerX = () => "x";
    const playerO = () => "o";

    return {playerX, playerO};
})();

const Game = (() => {
    const cells = document.querySelectorAll(".cell");
    const restartBtn = document.querySelector("#restartBtn");
    const winnerMsg = document.querySelector(".winningMessage");
    let currentPlayer = Players.playerX();
    
    // array of placeholders for cell indexes 0 - 8
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const activeCell = () => {
        cells.forEach(cell => {
            cell.addEventListener("click", playerMark, {once: true});
        })
    }

   const playerMark = (e) => {
    const cell_dataSet = e.target.dataset.cell;
    if(!gameBoard[cell_dataSet])
        gameBoard[cell_dataSet] = currentPlayer;
        e.target.textContent = currentPlayer;

        if(checkForWinner(currentPlayer)) {
            winnerMsg.textContent = `${currentPlayer} wins!`;
            return;
        } 

        //if current player = X, then switch to player O and so forth.
        currentPlayer = (currentPlayer === Players.playerX()) ? Players.playerO() : Players.playerX();
        winnerMsg.textContent = `${currentPlayer}'s turn`;

        if (!gameBoard.includes("")) {
            winnerMsg.textContent = "No Winner!";
        }
   }

   const checkForWinner = (currentPlayer) => {
    if(gameBoard[0] === currentPlayer) {
        if(gameBoard[1] === currentPlayer && gameBoard[2] === currentPlayer) {
            winnerMsg.textContent = `${currentPlayer} wins!`;
            return true;
        } 

        if(gameBoard[3] === currentPlayer && gameBoard[6] === currentPlayer) {
            winnerMsg.textContent = `${currentPlayer} wins!`;
            return true;
        }

        if(gameBoard[4] === currentPlayer && gameBoard[8] === currentPlayer) {
            winnerMsg.textContent = `${currentPlayer} wins!`;
            return true;
        }
        
    } else if(gameBoard[8] === currentPlayer) {
        if(gameBoard[5] === currentPlayer && gameBoard[2] === currentPlayer) {
            winnerMsg.textContent = `${currentPlayer} wins!`;
            return true;
        }

        if(gameBoard[7] === currentPlayer && gameBoard[6] === currentPlayer) {
            winnerMsg.textContent = `${currentPlayer} wins!`;
            return true;
        }
    } else if(gameBoard[2] === currentPlayer) {
        if(gameBoard[4] === currentPlayer && gameBoard[6] === currentPlayer) {
            winnerMsg.textContent = `${currentPlayer} wins!`;
            return true;
        }
    } else if(gameBoard[4] === currentPlayer) {
        if(gameBoard[1] === currentPlayer && gameBoard[7] === currentPlayer) {
            winnerMsg.textContent = `${currentPlayer} wins!`;
            return true;
        }
        if(gameBoard[3] === currentPlayer && gameBoard[5] === currentPlayer) {
            winnerMsg.textContent = `${currentPlayer} wins!`;
            return true;
        } 
    } else if(gameBoard[5] === currentPlayer) {
        if(gameBoard[4] === currentPlayer && gameBoard[3] === currentPlayer) {
            winnerMsg.textContent = `${currentPlayer} wins!`;
            return true;
        } 
    } else if(gameBoard[1] === currentPlayer) {
        if(gameBoard[4] === currentPlayer && gameBoard[7] === currentPlayer) {
            winnerMsg.textContent = `${currentPlayer} wins!`;
            return true;
        } 
    } 
  
   }

    const restartGame = () => {
        window.location.reload();
        currentPlayer = Players.playerX();
    }

    restartBtn.addEventListener("click", restartGame);
    return {activeCell, restartGame};
   
})();

Game.activeCell();






