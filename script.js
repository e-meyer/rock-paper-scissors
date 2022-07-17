const buttons = Array.from(document.getElementsByClassName('button'))
const buttons_pc = Array.from(document.querySelectorAll('#computer'))
let changeScore = document.querySelectorAll('.player-points, .computer-points')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerSelection = e.currentTarget.id
        let computerSelection = computerPlay()

        let sizeIncreaser = document.querySelector(`.${computerSelection.toLowerCase()}`)
        sizeIncreaser.classList.add('toggle')

        let finalScore = checkStatus(playerSelection, computerSelection)

        if (finalScore == 3) changeScore[1].innerText++;
        else if (finalScore == 2) changeScore[0].innerText++;

    })
    
})

buttons_pc.forEach(buttonpc => buttonpc.addEventListener('transitionend', (e) => {
    e.currentTarget.classList.remove('toggle');
}))

function computerPlay() {
    let arrOptions = ['Rock', 'Paper', 'Scissors']
    let randomIndex = Math.floor(Math.random() * (2 + 1))

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
