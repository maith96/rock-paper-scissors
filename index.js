const choices = ['Rock', 'Paper', 'Scissors']

let player_score = 0
let AI_score = 0

const selectionButtons = document.querySelector('.selection-buttons')
const buttons = document.querySelectorAll('.btn')
const divGameOver = document.querySelector('.game-over')
const result = document.querySelector('.game-over h2')
const newGameBtn = document.querySelector('.game-over button')
newGameBtn.addEventListener('click', ()=>newGame())
setButtonState()

selectionButtons.addEventListener('click', onPlayerMove)

newGame()


function updateSCores(matchRes){
    console.log(matchRes);
    if(matchRes === 'Win')
        player_score += 1
    else if(matchRes === 'Lose')
        AI_score += 1
    
}

function onPlayerMove(e){
    let ps = e.target.getAttribute('data-value')
    let cs = getComputerChoice().toLowerCase()

    showSelections(ps, cs)

    console.log(cs);

    res = playRound(ps, cs)
    
    updateSCores(res)
    showScores()

    if(player_score >= 5 || AI_score >= 5)
        gameOver(res)
}

function newGame(){
    player_score = 0
    AI_score = 0

    selectionButtons.classList.remove('inactive')
    setButtonState(true)
    divGameOver.classList.add('inactive')

    showScores()
    showSelections('RPS', 'RPS')
}

function gameOver(res){
    setButtonState(false)
    selectionButtons.classList.add('inactive')
    divGameOver.classList.remove('inactive')
    
    result.textContent = `You ${res}`

}
function setButtonState(state=true){
    buttons.forEach(btn=>{
        if(state == true)
            btn.removeAttribute('disabled')
        else
            btn.setAttribute('disabled', state)
    })
}

function showScores(){
    const p_score = document.querySelector(".player-score")
    const A_score = document.querySelector('.AI-score')

    p_score.textContent = player_score
    A_score.textContent = AI_score

}
function showSelections(ps, cs){
    const playerSelection = document.querySelector('.player p')
    const AISelection = document.querySelector('.AI p')

    playerSelection.textContent = ps
    AISelection.textContent = cs
}

function getComputerChoice(){
    
    return choices[Math.round(Math.random()*2)]
}

function playRound(ps, cs){
    let player_res = ''

    if (ps === cs) {
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

    else if(ps === 'scissor')
        if (cs == 'paper')
            player_res = 'Win'
        else    
            player_res = 'Lose'
    if(player_res.length == 0)
        debugger

        return player_res    
}






