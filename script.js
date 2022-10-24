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
        const newScore = document.getElementById("pikachu-score")
        newScore.innerText = parseInt(newScore.innerText) + 1
        console.log("PIKACHU WIN!")
    }
}

//CHARMANDER ATTACKING
function charmanderAttack (attacker, defender) {
    if (attacker === "charmander"){
        console.log("in the charmander attack")
        let newHealth = Math.round(pikachu.health -= charmander.damage())
        if(newHealth <= 0) {
            newHealth = 0
        }
        const healthBar = document.getElementById("pikachu-health")
        healthBar.innerText = newHealth
    }
    if (pikachu.health <= 0){
        const newScore = document.getElementById("charmander-score")
        newScore.innerText = parseInt(newScore.innerText) + 1
        console.log("CHARMANDER WIN!")
    }
}

