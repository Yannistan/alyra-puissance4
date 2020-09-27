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

/*player_symbols = ['X', 'O']



grille = Grille()

current_symbol = None
current_player_name = None

step_counter = 0
while not(grille.check_victory()) and len(grille.look_for_allowed_steps()) > 0:

    if step_counter % 2 == 0:
    current_symbol = 'X'
else :
    current_symbol = 'O'

if current_symbol == ai_player.player:
    current_player_name = 'artificial intelligence'

if step_counter > 0:
    grille.show_grid() */