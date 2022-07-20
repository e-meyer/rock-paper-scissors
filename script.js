const buttons = Array.from(document.getElementsByClassName('button'))
const buttons_pc = Array.from(document.querySelectorAll('#computer'))
let playAgain = document.querySelector('.play-again')
let endResultOutput = document.querySelector('#output')
let versus = document.querySelector('.versus')
let arrScores = document.querySelectorAll('.player-points, .computer-points')             // retusn a nodelist of 2 position which will be used to 
                                                                                            // display the score of the computer and the player
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(button.style.cursor == 'not-allowed') return;

        buttons.forEach((button) => {
            button.style.cursor = 'not-allowed'; 
        })

        let playerSelection = e.currentTarget.id
        let computerSelection = computerPlay()

        addStyle(computerSelection);

        let finalScore = checkStatus(playerSelection, computerSelection)

        if (finalScore == 3) { 
            arrScores[1].innerText++                                                      // if the checkstatus function returns 3, then the points will
                                                                                            // go to the player                                        
            versus.innerText = `You won! ${capitalizeString(playerSelection)} beats ${computerSelection}`
            versus.style.color = 'rgb(222, 96, 231)'
        }
        else if (finalScore == 2){
            arrScores[0].innerText++                                                      // if it returns 2 then it will be counted for the computer

            versus.innerText = `You lost! ${computerSelection} beats ${capitalizeString(playerSelection)}`
            versus.style.color = 'rgba(0,0,0,0.4)'
        } else {
            versus.innerText = `Draw!`
            versus.style.color = 'rgba(0,0,0,0.4)'
        }

        setTimeout(() => {
            buttons.forEach((button) => {
                button.style.cursor = 'pointer'; 
                versus.innerText = 'x'
                versus.style.color = 'rgba(0,0,0,0.4)'
            })}, 2000);
        
                    
        if(checkWinner(arrScores[0].innerText, arrScores[1].innerText)){
            if(arrScores[0].innerText >= 5) displayPlayAgain('lost')
            
            else displayPlayAgain('won')
        }

    })
    
})

function capitalizeString(str) {
    str = str.toLowerCase();
    str = str.replace(str.charAt(0), str.toUpperCase()[0]);
    return str;
}

let addStyle = (selection) => {
    let sizeIncreaser = document.querySelector(`.${selection.toLowerCase()}`)               // this function is used to show the computer selection
    sizeIncreaser.classList.add('toggle')                                                   // using a css class called toggle, which has a style
}                                                                                           // in style.css folder

function computerPlay() {   
    let arrOptions = ['Rock', 'Paper', 'Scissors']                                          
    let randomIndex = Math.floor(Math.random() * (2 + 1))                                   // gets a random number ranging from 0 to 2 and returns
                                                                                            // it so the function computerPlay can return a random
    return arrOptions[randomIndex]                                                          // chose between rock, paper and scissors
}

function checkWinner(computerPoints, playerPoints){
    if (playerPoints >= 5 || computerPoints >= 5) return true

    return false
}   

function displayPlayAgain(finalResult) {
    endResultOutput.innerText = finalResult
    playAgain.style.display = 'flex'
    document.querySelector('.play-again .button').addEventListener('click', () => location.reload())
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

buttons_pc.forEach(buttonpc => buttonpc.addEventListener('transitionend', (e) => {          // this is used to listen when the events of transition
    e.currentTarget.classList.remove('toggle');                                             // of the previous function ends, then the class toggle
}))                                                                                         // previously applied will be removed and so the style