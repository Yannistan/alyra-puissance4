import readlineSync from 'readline-sync'
// Check if there is still place in the grid
const isFull = () => each(({ char }) => char === '-')

// Grille de jeu
function grille() {
    let grid = []
    for (let line = 0; line < 6; line++) {
        grid.push([])
        for (let col = 0; col < 7; col++) {
            grid[line][col] = '-'
        }
    }
    return grid
}

function display(i, column, player, grid) {
    if (player === 'O') {
        grid[i][column] = 'O'
    } else {
        grid[i][column] = 'X'
    }
    for (let line = 0; line < 6; line++) {
        for (let col = 0; col < 7; col++) {
            console.log(
                'line = ',
                line,
                'column = ',
                col,
                'element = ',
                grid[line][col]
            )
        }
    }
}

// places a jeton of a player in a given column
function play(column, player, grid) {
    if (player !== 'O' && player !== 'X') return false

    for (let i = 5; i >= 0; i--) {
        if (grid[i][column] === '-') {
            grid[i][column] = player
            console.log('play position: ', i, column, grid[i][column])
            display(i, column, player, grid)
            return true
        }
    }
    return false
}

// Checks if there is a sequence of 4 coins in the grid (horizontally)
function checkLines(grid) {
    //console.log('grid at checkLines', grid)
    for (let line = 0; line < 6; line++) {
        for (let col = 0; col < 4; col++) {
            if (
                grid[line][col] === grid[line][col + 1] &&
                grid[line][col] === grid[line][col + 2] &&
                grid[line][col] === grid[line][col + 3] &&
                grid[line][col] !== '-'
            ) {
                return grid[line][col]
            }
        }
    }
    return null
}

// Checks if there is a sequence of 4 coins in the grid (vertically)
function checkCols(grid) {
   // console.log('grid at checkcols', grid)
    for (let line = 0; line < 3; line++) {
        for (let col = 0; col < 7; col++) {
            if (
                grid[line][col] === grid[line + 1][col] &&
                grid[line][col] === grid[line + 2][col] &&
                grid[line][col] === grid[line + 3][col] &&
                grid[line][col] !== '-'
            ) {
                return grid[line][col]
            }
        }
    }
    return null
}

// Checks if there is a sequence of 4 coins in the grid diagonally
function checkDiagonals(grid) {
    //console.log('grid at checkdials', grid)
    for (let line = 0; line < 3; line++) {
        for (let col = 0; col < 4; col++) {
            if (
                grid[line][col] === grid[line + 1][col + 1] &&
                grid[line][col] === grid[line + 2][col + 2] &&
                grid[line][col] === grid[line + 3][col + 3] &&
                grid[line][col] != '-'
            ) {
                return grid[line][col]
            }
        }
    }

    for (let line = 3; line < 6; line++) {
        for (let col = 0; col < 4; col++) {
            if (
                grid[line][col] === grid[line - 1][col + 1] &&
                grid[line][col] === grid[line - 2][col + 2] &&
                grid[line][col] === grid[line - 3][col + 3] &&
                grid[line][col] != '-'
            ) {
                return grid[line][col]
            }
        }
    }

    return null
}

// Checks if there is a sequence of 4 coins in the grid
function checkWinner(grid) {
    let winner = checkLines(grid)
    //console.log('winner at chechlines', winner)
    if (winner != null) {
        return winner
    }
    winner = checkCols(grid)
    //console.log('winner at chechCols', winner)
    if (winner !== null) {
        return winner
    }
    winner = checkDiagonals(grid)
    //console.log('winner at checkDiagonals', winner)
    //console.log('winner=', winner)
    return winner
}

// Checks if there is still space in the grid
function gridIsFull(grid) {
    for (let line = 0; line < 6; line++) {
        for (let col = 0; col < 7; col++) {
            if (grid[line][col] === '-') {
                return false
            }
        }
    }
    return true
}

let grid = grille()
console.log(grid)
let nom1 = readlineSync.question('Player 1 enter your name: ')
let nom2 = readlineSync.question('Player 2 enter your name: ')
/*let options = ['put', 'rules', 'help', 'whoami', 'abandon']
let choix = readlineSync.keyInSelect(options, 'Please choose an action: ')

switch (choix) {
    case 0:
        let columns = [0,1,2,3,4,5,6]
        let col_choix = readlineSync.keyInSelect(columns, 'Please choose an action: ')
        checkplay(col_choix,player)
        break;
    case 1:
        console.log(`The rules of the game are:`)
        break;
    case 2:
        console.log("help")
        break;
    case 3:
        console.log(`whoami:${player}`)
        break;
    case 4:
        console.log("Abandon:")
        if (player === 'O') {
            console.log(`The winner is:"X"`)
        } else {
        console.log(`The winner is:"O"`)
        }
        break;
    default:
        console.log('ba')

} */
let players = ['O', 'X']
let turn = 0
let winner = null

//console.log('Please choose a column: ')

//let columns = [0, 1, 2, 3, 4, 5, 6]
//let choix_col = readlineSync.keyInSelect(columns, 'Please choose a column: ')

while (5) {
    console.log(players);
    let columns = [0, 1, 2, 3, 4, 5, 6]
    let choix_col = readlineSync.keyInSelect(columns, 'Please choose a column: ')
    console.log("turn =", turn);
//function checkplay(choix_col) {
    if (gridIsFull(grid) && winner === null) {
        console.log('Partie terminée, égalité!')

        break;
    } else if (winner !== null) {
        if (winner === 'O') {
            console.log(`Victoire du "O" !`)
            console.log("winner is", winner)
            break;
        } else {
            console.log(`Victoire du "X" !`)
            console.log("winner is ", winner)
            break;
        }
    } else {
        if (play(choix_col, players[turn % 2], grid)) {
            turn++
            console.log(turn)
        }
        if (players[turn % 2] === 'O') {
            console.log(`Tour du "O" !`)
        } else {
            console.log(`Tour du "X" !`)
        }
        winner = checkWinner(grid)
        console.log('winner = ', winner)
        if (winner != null) {
            if (winner === 'O') {
                console.log(`Victoire du "O" !`)
                console.log("winner")
                break;
            } else {
                console.log(`Victoire du "X" !`)
                console.log("winner is ", winner)
                break;
            }
        }
    }
}
console.log("Game terminated")
/* while ((winner == null) && (gridIsFull == false)) {
    let columns = [0, 1, 2, 3, 4, 5, 6]
    let choix_col = readlineSync.keyInSelect(columns, 'Please choose a column: ')
    checkplay(choix_col)

} */