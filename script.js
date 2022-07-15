const buttons = Array.from(document.getElementsByClassName('button'))
let changeScore = document.querySelectorAll('.player-points, .computer-points')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerSelection = e.currentTarget.id
        let computerSelection = computerPlay()

        let finalScore = checkStatus(playerSelection, computerSelection)

        if (finalScore == 3) {
            console.log('PL WIN ' + computerSelection + ' ' + playerSelection)
            changeScore[1].innerText++;
        }
        else if (finalScore == 2) {
            console.log('PC WIN ' + computerSelection + ' ' + playerSelection)
            changeScore[0].innerText++;
        }
            
    })
})

function addStyleForComputer(selection) {
    let sizeIncreaser = document.querySelector(`.${selection.toLowerCase()}`)
    
    sizeIncreaser.classList.add('toggle')
}

function computerPlay() {
    let arrOptions = ['Rock', 'Paper', 'Scissors']
    let randomIndex = Math.floor(Math.random() * (2 + 1))
    addStyleForComputer(arrOptions[randomIndex].toLowerCase())

    return arrOptions[randomIndex]

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

// function countPoints(valueReturned, pointsCounter){
//     if (valueReturned == 3) pointsCounter++
//     else if (valueReturned == 2) pointsCounter--
    
//     return pointsCounter
// }

