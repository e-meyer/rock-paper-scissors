const buttons = Array.from(document.getElementsByClassName('button'))
const buttons_pc = Array.from(document.querySelectorAll('#computer'))
let changeScore = document.querySelectorAll('.player-points, .computer-points')             // retusn a nodelist of 2 position which will be used to 
                                                                                            // display the score of the computer and the player
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerSelection = e.currentTarget.id
        let computerSelection = computerPlay()

        addStyle(computerSelection);

        let finalScore = checkStatus(playerSelection, computerSelection)

        if (finalScore == 3) changeScore[1].innerText++;                                    // if the checkstatus function returns 3, then the points will
                                                                                            // go to the player

        else if (finalScore == 2) changeScore[0].innerText++;                               // if it returns 2 then it will be counted for the computer

    })
    
})

let addStyle = (selection) => {
    let sizeIncreaser = document.querySelector(`.${selection.toLowerCase()}`)               // this function is used to show the computer selection
    sizeIncreaser.classList.add('toggle')                                                   // using a css class called toggle, which has a style
}                                                                                           // in style.css folder

buttons_pc.forEach(buttonpc => buttonpc.addEventListener('transitionend', (e) => {          // this is used to listen when the events of transition
    e.currentTarget.classList.remove('toggle');                                             // of the previous function ends, then the class toggle
}))                                                                                         // previously applied will be removed and so the style

function computerPlay() {   
    let arrOptions = ['Rock', 'Paper', 'Scissors']                                          
    let randomIndex = Math.floor(Math.random() * (2 + 1))                                   // gets a random number ranging from 0 to 2 and returns
                                                                                            // it so the function computerPlay can return a random
    return arrOptions[randomIndex]                                                          // chose between rock, paper and scissors
}

function checkStatus(playerSelection, computerSelection) {                                  
    switch (playerSelection.toUpperCase()) {
        case 'ROCK':
            if (computerSelection.toUpperCase() == 'PAPER')
                return 2                                                   // lost
            else if (computerSelection.toUpperCase() == 'SCISSORS')
                return 3                                                   // won
            break;
        case 'PAPER':
            if (computerSelection.toUpperCase() == 'SCISSORS') 
                return 2                                                   // lost
            else if (computerSelection.toUpperCase() == 'ROCK')
                return 3                                                   // won
            
            break;
        case 'SCISSORS':
            if (computerSelection.toUpperCase() == 'ROCK')
                return 2                                                   // lost
            else if (computerSelection.toUpperCase() == 'PAPER') 
                return 3                                                   // won
            
            break
        default:
            return
            break
    }
}
