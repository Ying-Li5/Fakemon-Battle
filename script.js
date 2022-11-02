//HEALTH BAR 
let charmander = {
    name: "charmander",
    health: 100,
}

let pikachu = {
    name: "pikachu",
    health: 100,
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
function pikachuAttack(fieldName, attacker, attackName){
    if (attacker === "pikachu"){
        if (pikachuTurn){
            const attackCheck = decreaseAbility(fieldName) 
            if (attackCheck === true){
                let newHealth = Math.round(charmander.health -= calculateAttack(attackName))
                if (newHealth <= 0) {
                    newHealth = 0
                }
                charmander.health = newHealth
                const healthBar = document.getElementById("charmander-health")
                healthBar.innerText = newHealth
                pikachuTurn = false;
                playerTurn()
            }
            //CHECKING CHARMANDER HEALTH
            if (charmander.health <= 0){
                const newScore = document.getElementById("pikachu-score")
                newScore.innerText = parseInt(newScore.innerText) + 1
                const updatePlayerTurn = document.getElementById("announcement")
                updatePlayerTurn.innerText = "PIKACHU WINS!"
                resetGame()
                console.log("PIKACHU WIN!")
            }
        }
    }      
}

//CHARMANDER ATTACKING
function charmanderAttack (fieldName, attacker, attackName) {
    if (attacker === "charmander"){
        if (pikachuTurn === false) {
            const attackCheck = decreaseAbility(fieldName)
            if (attackCheck === true) {
                let newHealth = Math.round(pikachu.health -= calculateAttack(attackName))
                if(newHealth <= 0) {
                    newHealth = 0
                }
                const healthBar = document.getElementById("pikachu-health")
                healthBar.innerText = newHealth
                pikachuTurn = true;
                playerTurn()
            }
        }
            //CHECKING PIKACHU HEALTH
            if (pikachu.health <= 0){
                const newScore = document.getElementById("charmander-score")
                newScore.innerText = parseInt(newScore.innerText) + 1
                const updatePlayerTurn = document.getElementById("announcement")
                updatePlayerTurn.innerText = "CHARMANDER WINS!"
                resetGame()
                console.log("CHARMANDER WIN!")
            }
        }
}

//DECREASING ABILIIY AMT
function decreaseAbility(nameOfField){
    const attackField = document.getElementById(nameOfField)
    if(parseInt(attackField.innerText) > 0) {
        attackField.innerText = parseInt(attackField.innerText) - 1
        return true
    } else {
        return false
    }
}

//CHECKING TO SEE WHICH BUTTON IS CLICKED
function calculateAttack(nameOfAttack){
    if (nameOfAttack === "basic-pikachu") {
        return Math.round((Math.random() * 10))
    } else if (nameOfAttack === "thunderbolt") {
        return Math.round((Math.random() * 20))
    } else if (nameOfAttack === "volt-tackle") {
        return Math.round((Math.random() * 40))
    } else if (nameOfAttack === "thunderstorm") {
        return Math.round((Math.random() * 60))
    } else if (nameOfAttack === "basic-charmander") {
        return Math.round((Math.random() * 10))
    } else if (nameOfAttack === "blaze") {
        return Math.round((Math.random() * 20))
    } else if (nameOfAttack === "ember") {
        return Math.round((Math.random() * 40))
    } else if (nameOfAttack === "fire-blast") {
        return Math.round((Math.random() * 60))
    }
}

//RESETTING GAME AFTER SCORING
function resetGame() {
    //PIKACHU
    document.getElementById("pikachu-health").innerText = 100;
    document.getElementById("p-counter").innerText = 10;
    document.getElementById("thunderbolt-counter").innerText = 3;
    document.getElementById("volt-tackle-counter").innerText = 2;
    document.getElementById("thunderstorm-counter").innerText = 1;
    pikachu.health = 100;

    //CHARMANDER
    document.getElementById("charmander-health").innerText = 100;
    document.getElementById("c-counter").innerText = 10;
    document.getElementById("blaze-counter").innerText = 3;
    document.getElementById("ember-counter").innerText = 2;
    document.getElementById("fire-blast-counter").innerText = 1;
    charmander.health = 100;
}

//RESET SCOREBOARD
// function resetButton() {
//     document.getElementById("scoreboard-score") = 0;
// }