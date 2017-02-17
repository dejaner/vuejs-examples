new Vue({
    el: '#app',
    data: {
        userHealth: 100,
        monsterHealth: 100,
        log: [],
        gameOngoing: false
    },
    methods: {
        startGame: function() {
            this.reset();
            this.gameOngoing = true;
        },
        reset: function () {
            this.userHealth = 100;
            this.monsterHealth = 100;
            this.log = [];
            this.gameOngoing = false;
        },
        playerAttack: function () {
            var attack = getRandomInt(1, 10);
            this.monsterHealth -= attack;
            this.log.push({
                message: "You hit monster for " + attack + " damage",
                player: true
            });
            this.monsterAttack();
        },
        specialAttack: function () {
            var attack = getRandomInt(1, 20);
            this.monsterHealth -= attack;
            this.log.push({
                message: "You hit monster for " + attack + " damage",
                player: true
            });
            this.monsterAttack();
        },
        heal: function () {
            var heal = getRandomInt(5, 15);
            this.userHealth += heal;

            if(this.userHealth > 100) {
                this.userHealth = 100;
            }

            this.log.push({
                message: "You heal for " + heal + " damage",
                player: true
            });
            this.monsterAttack();
        },
        monsterAttack: function () {
            var attack = getRandomInt(1, 10);
            this.userHealth -= attack;
            this.log.push({
                message: "Monster hits you for " + attack + " damage",
                player: false
            });
        },
        giveUp: function () {
            this.userHealth = 0;
        }
    },
    watch: {
        userHealth: function(value) {
            if(value <= 0) {
                confirm("You lost! Another game?") ? this.startGame() : this.reset();
            }
        },
        monsterHealth: function(value) {
            if(value <= 0) {
                confirm("You won! Another game?") ? this.startGame() : this.reset();
            }
        }
    }
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}