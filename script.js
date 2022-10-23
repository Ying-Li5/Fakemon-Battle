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

//SCOREBOARD
let pikachuScore = 0
let charmanderScore = 0

function scoreCounter() {

}

//PIKACHU ATTACKING 
function pikachuAttack(attacker, defender){
    if (attacker === "pikachu"){
        console.log("in the pikachu attack")
        let newHealth = Math.round(charmander.health -= pikachu.damage())
        if (newHealth <= 0) {
            newHealth = 0
        }
        charmander.health = newHealth
        const healthBar = document.getElementById("charmander-health")
        healthBar.innerText = newHealth
    } 
    if (charmander.health <= 0){
        console.log("PIKACHU WIN!")
    }
}

//CHARMANDER ATTACKING
function charmanderAttack (attacker, defender) {
    if (attacker === "charmander"){
        console.log("in the charmander attack")
        const newHealth = Math.round(pikachu.health -= charmander.damage())
        pikachu.health = newHealth
        const healthBar = document.getElementById("pikachu-health")
        healthBar.innerText = newHealth
    }
    if (pikachu.health <= 0){
        console.log("CHARMANDER WIN!")
    }
}

