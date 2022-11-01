//HEALTH BAR 
let charmander = {
    name: "charmander",
    health: 100,
    basicDamage () {
        return Math.round((Math.random() * 10))
    },
    blazeDamage () {
        return Math.round((Math.random() * 10)) //change damage
    },
    emberDamage () {
        return Math.round((Math.random() * 10)) //change damage
    },
    fireBlastDamage () {
        return Math.round((Math.random() * 10)) //change damage
    },
}

let pikachu = {
    name: "pikachu",
    health: 100,
    basicDamage () {
        return Math.round((Math.random() * 10))
    },
    thunderboltDamage () {
        return Math.round((Math.random() * 10)) //change damage
    },
    voltTackleDamage () {
        return Math.round((Math.random() * 10)) //change damage
    },
    thunderstormDamage () {
        return Math.round((Math.random() * 10)) //change damage
    },

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
            const attackCheck = decreasePikachuAttacks() 
            if (attackCheck === true){
                let newHealth = Math.round(charmander.health -= pikachu.basicDamage())
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

//PIKACHU SKILLS
function thunderboltAttack(attacker, defender) {
    if (attacker === "pikachu"){
        console.log("in the pikachu attack")
        if (pikachuTurn){
            const attackCheck = decreaseThunderbolt() 
            if (attackCheck === true) {
                let newHealth = Math.round(charmander.health -= pikachu.thunderboltDamage())
            if (newHealth <= 0) {
                newHealth = 0 
            }
            charmander.health = newHealth
            const healthBar = document.getElementById("charmander-health")
            healthBar.innerText = newHealth
            pikachuTurn = false;
            playerTurn()
            decreaseThunderbolt()
        }
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

function voltTackleAttack(attacker, defender) {
    if (attacker === "pikachu"){
        console.log("in the pikachu attack")
        if (pikachuTurn){
            const attackCheck = decreaseVoltTackle()
            if (attackCheck === true) {
                let newHealth = Math.round(charmander.health -= pikachu.voltTackleDamage())
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

function thunderstormAttack(attacker, defender) {
    if (attacker === "pikachu"){
        console.log("in the pikachu attack")
        if (pikachuTurn){
            const attackCheck = decreaseThunderstorm()
            if (attackCheck === true) {
                let newHealth = Math.round(charmander.health -= pikachu.thunderstormDamage())
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

//CHARMANDER ATTACKING
function charmanderAttack (attacker, defender) {
    if (attacker === "charmander"){
        console.log("in the charmander attack")
        if (pikachuTurn === false) {
            const attackCheck = decreaseCharmanderAttacks()
            if (attackCheck === true) {
                let newHealth = Math.round(pikachu.health -= charmander.basicDamage())
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

    //CHARMANDER SKILLS
function blazeAttack (attacker, defender) {
    if (attacker === "charmander"){
        console.log("in the charmander attack")
        if (pikachuTurn === false) {
            const attackCheck = decreaseBlaze()
            if (attackCheck === true) {
                let newHealth = Math.round(pikachu.health -= charmander.blazeDamage())
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

function emberAttack (attacker, defender) {
    if (attacker === "charmander"){
        console.log("in the charmander attack")
        if (pikachuTurn === false) {
            const attackCheck = decreaseEmber()
            if (attackCheck === true) {
                let newHealth = Math.round(pikachu.health -= charmander.emberDamage())
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

function fireBlastAttack (attacker, defender) {
    if (attacker === "charmander"){
        console.log("in the charmander attack")
        if (pikachuTurn === false) {
            const attackCheck = decreaseFireBlast()
            if (attackCheck === true) {
                let newHealth = Math.round(pikachu.health -= charmander.fireBlastDamage())
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

//DECREASE PIKACHU'S ATTACKS
function decreasePikachuAttacks() {
    const pCounter = document.getElementById("p-counter")
    if(parseInt(pCounter.innerText)> 0) {
        pCounter.innerText = parseInt(pCounter.innerText) - 1
        return true
    } else {
        return false
    }
}

function decreaseThunderbolt() {
    const thunderboltCounter = document.getElementById("thunderbolt-counter")
    if(parseInt(thunderboltCounter.innerText) > 0) {
        thunderboltCounter.innerText = parseInt(thunderboltCounter.innerText) - 1
        return true
    } else {
        return false
    }
}

function decreaseVoltTackle() {
    const voltTackleCounter = document.getElementById("volt-tackle-counter")
    if(parseInt(voltTackleCounter.innerText) > 0) {
        voltTackleCounter.innerText = parseInt(voltTackleCounter.innerText) - 1
        return true
    } else {
        return false
    }
}

function decreaseThunderstorm() {
    const thunderstormCounter = document.getElementById("thunderstorm-counter")
    if(parseInt(thunderstormCounter.innerText) > 0) {
        thunderstormCounter.innerText = parseInt(thunderstormCounter.innerText) - 1
        return true
    } else {
        return false
    }
}

//DECREASE CHARMANDER'S ATTACKS
function decreaseCharmanderAttacks() {
    const cCounter = document.getElementById("c-counter")
    if(parseInt(cCounter.innerText) > 0) {
        cCounter.innerText = parseInt(cCounter.innerText) - 1
        return true
    } else {
        return false
    }
}

function decreaseBlaze() {
    const blazeCounter = document.getElementById("blaze-counter")
    if(parseInt(blazeCounter.innerText) > 0) {
        blazeCounter.innerText = parseInt(blazeCounter.innerText) - 1
        return true
    } else {
        return false
    }
}

function decreaseEmber() {
    const emberCounter = document.getElementById("ember-counter")
    if(parseInt(emberCounter.innerText) > 0) {
        emberCounter.innerText = parseInt(emberCounter.innerText) - 1
        return true
    } else {
        return false
    }
}

function decreaseFireBlast() {
    const fireBlastCounter = document.getElementById("fire-blast-counter")
    if(parseInt(fireBlastCounter.innerText) > 0) {
        fireBlastCounter.innerText = parseInt(fireBlastCounter.innerText) - 1
        return true
    } else {
        return false
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
function resetButton() {
    document.getElementById("scoreboard-score") = 0;

}