//HEALTH BAR
let charmander = {
    name: "charmander",
    health: 50,
    damage () {
        return Math.round((Math.random() * 10))
    }
}

let pikachu = {
    name: "pikachu",
    health: 50,
    damage () {
        return Math.round((Math.random() * 10))
    }
}

//ANNOUNCEMENTS
let pikachuTurn = true;
function playerTurn () {
    if (pikachuTurn) {
        const updatePlayerTurn = document.getElementById("announcement")
        updatePlayerTurn.innerText = "It's Pikachu turn!"
    } else {
        const updatePlayerTurn = document.getElementById("announcement")
        updatePlayerTurn.innerText = "It's Charmander turn!"
    } 
}

//PIKACHU ATTACKING 
function pikachuAttack(attacker, defender){
    if (attacker === "pikachu"){
        console.log("in the pikachu attack")
        if (pikachuTurn){
            let newHealth = Math.round(charmander.health -= pikachu.damage())
            if (newHealth <= 0) {
                newHealth = 0
            }
            charmander.health = newHealth
            const healthBar = document.getElementById("charmander-health")
            healthBar.innerText = newHealth
            pikachuTurn = false;
            playerTurn()
        }
    } 

    if (charmander.health <= 0){
        const newScore = document.getElementById("pikachu-score")
        newScore.innerText = parseInt(newScore.innerText) + 1
        const updatePlayerTurn = document.getElementById("announcement")
        updatePlayerTurn.innerText = "PIKACHU WINS!"
        resetGame()
        console.log("PIKACHU WIN!")
    }
}

//CHARMANDER ATTACKING
function charmanderAttack (attacker, defender) {
    if (attacker === "charmander"){
        console.log("in the charmander attack")
        if (pikachuTurn === false) {
            let newHealth = Math.round(pikachu.health -= charmander.damage())
            if(newHealth <= 0) {
                newHealth = 0
            }
            const healthBar = document.getElementById("pikachu-health")
            healthBar.innerText = newHealth
            pikachuTurn = true;
            playerTurn()
        }
    }

    if (pikachu.health <= 0){
        const newScore = document.getElementById("charmander-score")
        newScore.innerText = parseInt(newScore.innerText) + 1
        const updatePlayerTurn = document.getElementById("announcement")
        updatePlayerTurn.innerText = "CHARMANDER WINS!"
        resetGame()
        console.log("CHARMANDER WIN!")
    }
}

//RESETTING GAME AFTER SCORING
function resetGame() {
    document.getElementById("pikachu-health").innerText = 50;
    document.getElementById("charmander-health").innerText = 50;
    pikachu.health = 50;
    charmander.health = 50;
}

//RESET SCOREBOARD
function resetButton() {
    document.getElementById("scoreboard-score") = 0;

}