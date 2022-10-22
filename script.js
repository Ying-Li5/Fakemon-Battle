let charmander = {
    name: "charmander",
    health: 50,
    damage: 10
}

let pikachu = {
    name: "pikachu",
    health: 50,
    damage: 10
}


function attackCommand(attacker, defender){
    if (attacker === "pikachu"){
        console.log("in the pikachu attack")
        const newHealth = charmander.health -= pikachu.damage
        const healthField = document.getElementById("charmander-health")
        healthField.innerText = newHealth
    }
}