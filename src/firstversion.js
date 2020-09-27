import readlineSync from 'readline-sync'


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
        console.log(
   `    +---+---+---+---+---+---+---+
  6 | ${grid[0][0]} | ${grid[0][1]} | ${grid[0][2]} | ${grid[0][3]} | ${grid[0][4]} | ${grid[0][5]} | ${grid[0][6]} |
    +---+---+---+---+---+---+---+
  5 | ${grid[1][0]} | ${grid[1][1]} | ${grid[1][2]} | ${grid[1][3]} | ${grid[1][4]} | ${grid[0][5]} | ${grid[0][6]} | 
    +---+---+---+---+---+---+---+      
  4 | ${grid[2][0]} | ${grid[2][1]} | ${grid[2][2]} | ${grid[2][3]} | ${grid[2][4]} | ${grid[2][5]} | ${grid[2][6]} | 
    +---+---+---+---+---+---+---+ 
  3 | ${grid[3][0]} | ${grid[3][1]} | ${grid[3][2]} | ${grid[3][3]} | ${grid[3][4]} | ${grid[3][5]} | ${grid[3][6]} |
    +---+---+---+---+---+---+---+ 
  2 | ${grid[4][0]} | ${grid[4][1]} | ${grid[4][2]} | ${grid[4][3]} | ${grid[4][4]} | ${grid[4][5]} | ${grid[4][6]} |
    +---+---+---+---+---+---+---+ 
  1 | ${grid[5][0]} | ${grid[5][1]} | ${grid[5][2]} | ${grid[5][3]} | ${grid[5][4]} | ${grid[5][5]} | ${grid[5][6]} |
    +---+---+---+---+---+---+---+
      1   2   3   4   5   6   7`)
}

// places a token of a player in a given column
function play(column, player, grid) {
    if (player !== 'O' && player !== 'X') return false

    for (let i = 5; i >= 0; i--) {
        if (grid[i][column] === '-') {
            grid[i][column] = player
            console.log(`Joueur courant est ${player}.`)
        //  console.log('Emplacement choisi: ', i, column, grid[i][column])
            display(i, column, player, grid)
            return true
        }
    }
    return false
}

// Checks if there is a sequence of 4 coins in the grid (horizontally)
function checkLines(grid) {
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
    if (winner != null) {
        return winner
    }
    winner = checkCols(grid)
    if (winner !== null) {
        return winner
    }
    winner = checkDiagonals(grid)
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
let nom1 = readlineSync.question('Joueur 1 saisissez votre prenom: ')
let nom2 = readlineSync.question('Joueur 2 saisissez votre prenom: ')

let players = ['O', 'X']
console.log(`${nom1} est joueur ${players[0]}`)
console.log(`${nom1} est joueur ${players[1]}`)
let turn = 0
let winner = null

while (5) {
    console.log(players);
    let columns = [0, 1, 2, 3, 4, 5, 6]
    let choix_col = readlineSync.keyInSelect(columns, `Joueur ${players[turn %2]} please choisissez une colonne: `)
    console.log("turn =", turn);
    
    if (gridIsFull(grid) && winner === null) {
        console.log('Partie terminée, égalité!')

        break;
    } else if (winner !== null) {
        if (winner === 'O') {
            console.log(`Victoire du "O" !`)
            
            break;
        } else {
            console.log(`Victoire du "X" !`)
            
            break;
        }
    } else {
        if (play(choix_col, players[turn % 2], grid)) {
            turn++
            console.log(turn)
        }
        if (players[turn % 2] === 'O') {
            console.log(`Prochain tour: "O" !`)
        } else {
            console.log(`Prochain tour: "X" !`)
        }
        winner = checkWinner(grid)

        if (winner != null) {
            if (winner === 'O') {
                console.log(`Victoire du "O" !`)
                break;
            } else {
                console.log(`Victoire du "X" !`)
                break;
            }
        }
    }
}
console.log("Partie terminée");