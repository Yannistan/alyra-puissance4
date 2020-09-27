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