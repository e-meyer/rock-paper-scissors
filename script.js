function computerPlay() {
    let arrOptions = ['Rock', 'Paper', 'Scissors']
    let randomIndex = Math.floor(Math.random() * (2 + 1))

    return arrOptions[randomIndex]

}

function playerPlay() {
    let playerSelection = prompt(
        "Make you decision, challenger. You can choose between 'Rock', 'Paper' and 'Scissors'"
    )

    return playerSelection.toString()
}

function checkStatus(playerSelection, computerSelection) {
    switch (playerSelection.toUpperCase()) {
        case 'ROCK':
            if (computerSelection.toUpperCase() == 'ROCK') {
                return 1                                                   // draw
            } else if (computerSelection.toUpperCase() == 'PAPER') {
                return 2                                                   // lost
            } else 
                return 3                                                   // won
            break;
        case 'PAPER':
            if (computerSelection.toUpperCase() == 'PAPER') {
                return 1                                                   // draw
            } else if (computerSelection.toUpperCase() == 'SCISSORS') {
                return 2                                                   // lost
            } else 
                return 3                                                   // won
            
            break;
        case 'SCISSORS':
            if (computerSelection.toUpperCase() == 'SCISSORS') {
                return 1                                                   // draw
            } else if (computerSelection.toUpperCase() == 'ROCK') {
                return 2                                                   // lost
            } else {
                return 3                                                   // won
            }
            break
        default:
            return
            break
    }
}

function countPoints(valueReturned, pointsCounter){
    if (valueReturned == 3) pointsCounter++
    else if (valueReturned == 2) pointsCounter--
    
    return pointsCounter
}

function game() {
    let pointsCounter = 0
    for (let i = 0; i < 5; i++) {

        let computerSelection = computerPlay()
        console.log('Computer have chosen ' + computerSelection)

        let playerSelection = playerPlay()
        console.log('Player have chosen ' + playerSelection)

        let valueReturned = checkStatus(playerSelection, computerSelection)

        pointsCounter = countPoints(valueReturned, pointsCounter)

        console.log(pointsCounter)
    }

    if (pointsCounter < 0) return 'Computer won'
    else if(pointsCounter > 0) return 'Player won'
    else return 'Draw'
}

console.log(game())
