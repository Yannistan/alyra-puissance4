let dim = 29;
let char = " ";
let arraynum = [" "];
let j = 0;
let k = 0;
let arraysymb = [];

let arraypipe = [];
arraypipe.push("6 ")
arraysymb.push("  ")
arraynum.push("  ")
let charsymb = "  ";
let charpipe = "  ";
for (let i=1;i<=dim;i++) {
    if ((i==1) || (i==5) || (i==9) || (i==13) || (i==17) || (i==21) || (i==25) || (i==29)) {
      charsymb = "+"
      charpipe = "|"
      arraysymb.push(charsymb);
      arraypipe.push(charpipe);
    } else {
        charsymb = "-"
        charpipe = " "
        arraysymb.push(charsymb);
        arraypipe.push(charpipe);
    }
    
    j=i/2;
    if (j%2==1) {
    k++;
    char = k
    arraynum.push(char);
    } else { 
    char=" "  
    arraynum.push(char);
    }  
}


console.log(arraynum.join(""))
console.log(arraysymb.join(""))
console.log(arraypipe.join(""))
console.log(arraysymb.join(""))
console.log(arraypipe.join(""))
console.log(arraysymb.join(""))
console.log(arraypipe.join(""))
console.log(arraysymb.join(""))
console.log(arraypipe.join(""))
console.log(arraysymb.join(""))
console.log(arraypipe.join(""))
console.log(arraysymb.join(""))
console.log(arraypipe.join(""))
console.log(arraysymb.join(""))

function display(i, column, player, grid) {
  if (player === 'O') {
      grid[i][column] = 'O'
  } else {
      grid[i][column] = 'X'
  }
      console.log(

`+---+---+---+---+---+---+---+
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
   1   2   3   4   5   6   7`
)
      
}




let arraynum = [];

let char = " ";
for (let j = 2; j <= dim; j++) {
    if ((j != 3) && (j != 7) && (j != 11) && (j != 15) && (j != 19) && (j != 23) && (j != 27)) {
        char += " "
        //arraynum.push(char)
    } else {
        if (j == 3)
            char += "1"
        if (j == 7)
            char += "2"
        if (j == 11)
            char += "3"
        c
        if (j == 15)
            char += "4"
        if (j == 19)
            char += "5"
        if (j == 23)
            char += "6"
        if (j == 27)
            char += "7"
        //arraynum.push(char)
    }
    arraynum.push(char);
}
for (let i = 1; i <= dim; i++) {

    console.log(arraynum[i])
}

function display(i, column, player, grid) {
    if (player === 'O') {
        grid[i][column] = 'O'
    } else {
        grid[i][column] = 'X'
    }
    for (let line = 0; line < 6; line++) {
        // for (let col = 0; col < 7; col++) {
        console.log(
            grid[line].join("")
        )
        // }
    }
}