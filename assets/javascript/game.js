
// set up the psychic's choice, log to console to make sure it works.
const psychicLetterOptions =['a', 'b', 'c', 'd', 'e','f','g','h','i','j', 'k', 'l','m','n','o','p','q','r', 's','t', 'u', 'v', 'w', 'x','y', 'z']

const getPsychicChoice = () => {
    return psychicLetterOptions[Math.floor(Math.random() * psychicLetterOptions.length)]
    
}
let psychicChoice 
psychicChoice = getPsychicChoice()

const storedGuesses =[]

// grid variables
let loggedWins = 0
let loggedLosses = 0
let loggedRemainingTurns = 10

const winsHtml = document.getElementById("wins")
const lossesHtml = document.getElementById("losses")
const remainTurnsHtml = document.getElementById("remaining-guesses")
const guessesHtml = document.getElementById("guesses-so-far")


console.log(psychicChoice)

// create variable for player guess.  Should be based on Key Down method
document.onkeydown = (event) => {
    const playerGuess = event.key.toLowerCase()
    if(psychicLetterOptions.indexOf(playerGuess)=== -1) {
        alert(`${playerGuess} is not a valid option, select an alphabetic character.`)
    } else {
        storedGuesses.push(playerGuess)
    }
    console.log(playerGuess)

// update grid numbers
    



    if(playerGuess !== psychicChoice){
    // count down remaining games
        if(loggedRemainingTurns > 1) {
            loggedRemainingTurns = loggedRemainingTurns -1
            remainTurnsHtml.innerHTML = loggedRemainingTurns
            guessesHtml.innerHTML = storedGuesses
        } else if(loggedRemainingTurns <=1) {
            loggedLosses = loggedLosses + 1
            lossesHtml.innerHTML = loggedLosses
            alert(`You LOSE! starting new game`)
            loggedRemainingTurns = 10
            remainTurnsHtml.innerHTML = loggedRemainingTurns
            psychicChoice = getPsychicChoice()
            console.log(psychicChoice)
            storedGuesses.length = 0
            guessesHtml.innerHTML = storedGuesses
        }
    
    // log guessed incorrect letter
    
    
    }
        else if(playerGuess === psychicChoice) {
        // win game
        psychicChoice = getPsychicChoice()
        alert('You WIN! starting new game')
        loggedWins = loggedWins + 1
        winsHtml.innerHTML = loggedWins 
        loggedRemainingTurns = 10
        remainTurnsHtml.innerHTML = loggedRemainingTurns
        console.log(psychicChoice)
        storedGuesses.length = 0
        guessesHtml.innerHTML = storedGuesses
        
        // clear log of guessed letters
        // reset number count
    }
}

getPsychicChoice();





//compare player guess to psychic choice, if wrong, add letter to letters guessed maybe as an array? push?

//count down number of turns.  Once player has guessed 10 letters, game is over. There should be a count down that shows on the page

// if player wins ie player choice/psychic choice match, then add a number to wins

// if player loses ie doesn't guess the psychic's choice within the allotted number of turns, log it as a loss.

// add some good css so the page looks better

