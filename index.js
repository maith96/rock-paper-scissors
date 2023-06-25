const choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(){
    
    return choices[Math.round(Math.random()*2)]
}

function playRound(playerSelection, computerSelection){
    let ps = playerSelection.toLowerCase()
    let cs = computerSelection.toLowerCase()
    let player_res

    if (ps === cs) {
        print(ps)
        print(cs)
        return 'It\'s a Draw!'
    }        

    else if(ps === 'rock')
        if (cs == 'scissors')
            player_res = 'Win'
        else
            player_res = 'Lose'
    
    else if(ps === 'paper')
        if (cs == 'rock')
            player_res = 'Win'
        else
            player_res = 'Lose'

    else if(ps === 'scissors')
        if (cs == 'paper')
            player_res = 'Win'
        else    
            player_res = 'Lose'
    

    return player_res
    
}

function game(){
    let player_score = 0
    let computer_score = 0

    for(i=0; i<5; i++){
        const playerSelection = prompt('Enter your guess:')
        const computer_selection = getComputerChoice()
        const res = playRound(playerSelection, computer_selection)
        
        player_score += (res == 'Win') && 1
        const whoBeatsWho = (res == 'Lose')? `${computer_selection} beats ${playerSelection}`: `${playerSelection} beats ${computer_selection}`
        const match_res = `You ${res}! ${whoBeatsWho}`

        console.log(match_res);
    }

    computer_score = 5 - player_score
    if(player_score > computer_score)
        console.log(`You Win ${player_score}: ${computer_score}`)
    else
        console.log(`You Lose ${player_score}: ${computer_score}`)
}

game()

