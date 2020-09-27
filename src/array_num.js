const dim = 29;
const plus = "+";
const pipe = "|"

let arraynum = [];

let char = " ";
for (let j=2;j<=dim;j++) {
    if ((j!=3) && (j!=7)&& (j!=11) && (j!=15) && (j!=19) && (j!=23) && (j!=27)) {
    char += " "
    //arraynum.push(char)
     } else {
        if (j==3)
        char+="1"
        if (j==7)
        char+="2"
        if (j==11)
        char+="3"
        if (j==15)
        char+="4"   
        if (j==19)
        char+="5"
        if (j==23)
        char+="6"
        if (j==27)
        char+="7"
        //arraynum.push(char)
    }
    arraynum.push(char);
}
for (let i=1;i<=dim;i++) {
    
console.log(arraynum[i])
}

/*for (let i=1;i<=dim;i++) {
    if (i==3) {
        a=i
        j=1
        console.log(j)
    }
    if (i==7) {
        a=a+4
        console.log(a)
    }
    if (i==11) {
        a=a+4
        console.log(a)
    }
}

for (let i = 0; i < nbStars; i++) {
    stars.push(char)
    char += "*";
}

for (let i = nbStars - 1; i >= 0; i--) {
    console.log(stars[i])
} */