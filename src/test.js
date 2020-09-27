let table = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
        console.log(table[i][j])
    }
}

console.log(table[2].indexOf(11))

