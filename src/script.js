window.alert('hello');
//HEALTH BAR 
var charmander = {
    name: "charmander",
    health: 100,
};
var pikachu = {
    name: "pikachu",
    health: 100,
};
//ANNOUNCEMENTS
var pikachuTurn = true;
function playerTurn() {
    if (pikachuTurn) {
        var updatePlayerTurn = document.getElementById("announcement");
        updatePlayerTurn.innerText = "It's Pikachu turn!";
    }
    else {
        var updatePlayerTurn = document.getElementById("announcement");
        updatePlayerTurn.innerText = "It's Charmander turn!";
    }
}
//PIKACHU ATTACKING 
function pikachuAttack(attackCounter, attacker, attackName) {
    if (attacker === "pikachu") {
        if (pikachuTurn) {
            var attackCheck = decreaseAbility(attackCounter);
            if (attackCheck === true) {
                var newHealth = Math.round(charmander.health -= calculateAttack(attackName));
                if (newHealth <= 0) {
                    newHealth = 0;
                }
                charmander.health = newHealth;
                var healthBar = document.getElementById("charmander-health");
                healthBar.innerText = (newHealth).toString();
                pikachuTurn = false;
                playerTurn();
            }
            //CHECKING CHARMANDER HEALTH
            if (charmander.health <= 0) {
                var newScore = document.getElementById("pikachu-score");
                newScore.innerText = (parseInt(newScore.innerText) + 1).toString();
                var updatePlayerTurn = document.getElementById("announcement");
                updatePlayerTurn.innerText = "PIKACHU WINS!";
                resetStats();
            }
        }
    }
}
//CHARMANDER ATTACKING
function charmanderAttack(attackCounter, attacker, attackName) {
    if (attacker === "charmander") {
        if (pikachuTurn === false) {
            var attackCheck = decreaseAbility(attackCounter);
            if (attackCheck === true) {
                var newHealth = Math.round(pikachu.health -= calculateAttack(attackName));
                if (newHealth <= 0) {
                    newHealth = 0;
                }
                var healthBar = document.getElementById("pikachu-health");
                healthBar.innerText = (newHealth).toString();
                pikachuTurn = true;
                playerTurn();
            }
        }
        //CHECKING PIKACHU HEALTH
        if (pikachu.health <= 0) {
            var newScore = document.getElementById("charmander-score");
            newScore.innerText = (parseInt(newScore.innerText) + 1).toString();
            var updatePlayerTurn = document.getElementById("announcement");
            updatePlayerTurn.innerText = "CHARMANDER WINS!";
            resetStats();
        }
    }
}
//DECREASING ABILIIY AMT
function decreaseAbility(nameOfField) {
    var attackField = document.getElementById(nameOfField);
    if (parseInt(attackField.innerText) > 0) {
        attackField.innerText = (parseInt(attackField.innerText) - 1).toString();
        return true;
    }
    else {
        return false;
    }
}
//CHECKING TO SEE WHICH BUTTON IS CLICKED
function calculateAttack(nameOfAttack) {
    if (nameOfAttack === "basic-pikachu") {
        return Math.round((Math.random() * 10));
    }
    else if (nameOfAttack === "thunderbolt") {
        return Math.round((Math.random() * 20));
    }
    else if (nameOfAttack === "volt-tackle") {
        return Math.round((Math.random() * 40));
    }
    else if (nameOfAttack === "thunderstorm") {
        return Math.round((Math.random() * 60));
    }
    else if (nameOfAttack === "basic-charmander") {
        return Math.round((Math.random() * 10));
    }
    else if (nameOfAttack === "blaze") {
        return Math.round((Math.random() * 20));
    }
    else if (nameOfAttack === "ember") {
        return Math.round((Math.random() * 40));
    }
    else if (nameOfAttack === "fire-blast") {
        return Math.round((Math.random() * 60));
    }
}
//RESETTING GAME AFTER SCORING
function resetStats() {
    //PIKACHU
    document.getElementById("pikachu-health").innerText = "100";
    document.getElementById("p-counter").innerText = "10";
    document.getElementById("thunderbolt-counter").innerText = "3";
    document.getElementById("volt-tackle-counter").innerText = "2";
    document.getElementById("thunderstorm-counter").innerText = "1";
    pikachu.health = 100;
    //CHARMANDER
    document.getElementById("charmander-health").innerText = "100";
    document.getElementById("c-counter").innerText = "10";
    document.getElementById("blaze-counter").innerText = "3";
    document.getElementById("ember-counter").innerText = "2";
    document.getElementById("fire-blast-counter").innerText = "1";
    charmander.health = 100;
}
//RESET GAME
function resetGame() {
    //RESET PIKACHU
    document.getElementById("pikachu-health").innerText = "100";
    document.getElementById("p-counter").innerText = "10";
    document.getElementById("thunderbolt-counter").innerText = "3";
    document.getElementById("volt-tackle-counter").innerText = "2";
    document.getElementById("thunderstorm-counter").innerText = "1";
    pikachu.health = 100;
    //RESET CHARMANDER
    document.getElementById("charmander-health").innerText = "100";
    document.getElementById("c-counter").innerText = "10";
    document.getElementById("blaze-counter").innerText = "3";
    document.getElementById("ember-counter").innerText = "2";
    document.getElementById("fire-blast-counter").innerText = "1";
    charmander.health = 100;
    //CLEAR SCORE
    document.getElementById("pikachu-score").innerText = "0";
    document.getElementById("charmander-score").innerText = "0";
}
