window.alert('hello')

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
        const updatePlayerTurn: HTMLFormElement = document.getElementById("announcement") as HTMLFormElement
        updatePlayerTurn.innerText = "It's Pikachu turn!"
    } else {
        const updatePlayerTurn: HTMLFormElement = document.getElementById("announcement") as HTMLFormElement
        updatePlayerTurn.innerText = "It's Charmander turn!"
    } 
}

//PIKACHU ATTACKING 
function pikachuAttack(attackCounter: string, attacker: string, attackName: string){
    if (attacker === "pikachu"){
        if (pikachuTurn){
            const attackCheck = decreaseAbility(attackCounter) 
            if (attackCheck === true){
                let newHealth = Math.round(charmander.health -= calculateAttack(attackName)!)
                if (newHealth <= 0) {
                    newHealth = 0
                }
                charmander.health = newHealth
                const healthBar = document.getElementById("charmander-health")
                healthBar!.innerText = (newHealth).toString()
                pikachuTurn = false;
                playerTurn()
            }
            //CHECKING CHARMANDER HEALTH
            if (charmander.health <= 0){
                const newScore = document.getElementById("pikachu-score")
                newScore!.innerText = (parseInt(newScore!.innerText) + 1).toString()
                const updatePlayerTurn = document.getElementById("announcement")
                updatePlayerTurn!.innerText = "PIKACHU WINS!"
                resetStats()
            }
        }
    }      
}

//CHARMANDER ATTACKING
function charmanderAttack (attackCounter: string, attacker: string, attackName: string) {
    if (attacker === "charmander"){
        if (pikachuTurn === false) {
            const attackCheck = decreaseAbility(attackCounter)
            if (attackCheck === true) {
                let newHealth = Math.round(pikachu.health -= calculateAttack(attackName)!)
                if(newHealth <= 0) {
                    newHealth = 0
                }
                const healthBar = document.getElementById("pikachu-health")
                healthBar!.innerText = (newHealth).toString()
                pikachuTurn = true;
                playerTurn()
            }
        }
            //CHECKING PIKACHU HEALTH
            if (pikachu.health <= 0){
                const newScore = document.getElementById("charmander-score")
                newScore!.innerText = (parseInt(newScore!.innerText) + 1).toString()
                const updatePlayerTurn = document.getElementById("announcement")
                updatePlayerTurn!.innerText = "CHARMANDER WINS!"
                resetStats()
            }
        }
}

//DECREASING ABILIIY AMT
function decreaseAbility(nameOfField: string){
    const attackField = document.getElementById(nameOfField)
    if(parseInt(attackField!.innerText) > 0) {
        attackField!.innerText = (parseInt(attackField!.innerText) - 1).toString()
        return true
    } else {
        return false
    }
}

//CHECKING TO SEE WHICH BUTTON IS CLICKED
function calculateAttack(nameOfAttack: string){
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
function resetStats() {
    //PIKACHU
    (document.getElementById("pikachu-health") as HTMLFormElement)!.innerText = "100";
    (document.getElementById("p-counter") as HTMLFormElement).innerText = "10";
    (document.getElementById("thunderbolt-counter") as HTMLFormElement).innerText = "3";
    (document.getElementById("volt-tackle-counter") as HTMLFormElement).innerText = "2";
    (document.getElementById("thunderstorm-counter") as HTMLFormElement).innerText = "1";
    pikachu.health = 100;

    //CHARMANDER
    (document.getElementById("charmander-health") as HTMLFormElement).innerText = "100";
    (document.getElementById("c-counter") as HTMLFormElement).innerText = "10";
    (document.getElementById("blaze-counter") as HTMLFormElement).innerText = "3";
    (document.getElementById("ember-counter") as HTMLFormElement).innerText = "2";
    (document.getElementById("fire-blast-counter") as HTMLFormElement).innerText = "1";
    charmander.health = 100;
}

//RESET GAME
function resetGame() {
    //RESET PIKACHU
    (document.getElementById("pikachu-health") as HTMLFormElement).innerText = "100";
    (document.getElementById("p-counter") as HTMLFormElement).innerText = "10";
    (document.getElementById("thunderbolt-counter") as HTMLFormElement).innerText = "3";
    (document.getElementById("volt-tackle-counter") as HTMLFormElement).innerText = "2";
    (document.getElementById("thunderstorm-counter") as HTMLFormElement).innerText = "1";
    pikachu.health = 100;

    //RESET CHARMANDER
    (document.getElementById("charmander-health") as HTMLFormElement).innerText = "100";
    (document.getElementById("c-counter") as HTMLFormElement).innerText = "10";
    (document.getElementById("blaze-counter") as HTMLFormElement).innerText = "3";
    (document.getElementById("ember-counter") as HTMLFormElement).innerText = "2";
    (document.getElementById("fire-blast-counter") as HTMLFormElement).innerText = "1";
    charmander.health = 100;

    //CLEAR SCORE
    (document.getElementById("pikachu-score") as HTMLFormElement).innerText = "0";
    (document.getElementById("charmander-score") as HTMLFormElement).innerText = "0";
}