// function getRandonAttack(min, max) {
//     Math.floor(Math.random() * (max + min)) + min
// }
const app = Vue.createApp({
    data() {
        return {
            healthBarPlayer: 100,
            healthBarMonsters: 100,
            reset: false,
            gameState: false

        }
    },
    computed: {
        healthBarPlayerStyles() {
            return {
                width: this.healthBarPlayer + '%'
            }
        },
        healthBarMonstersStyles() {
            return {
                width: this.healthBarMonsters + '%'
            }
        }
    },
    methods: {
        attack() {
            const attack = Math.floor(Math.random() * (12 - 5)) + 5
            console.log(attack)
            this.healthBarMonsters -= attack
            this.monsterAttack()
            if (attack === 10) {

            }
        },
        monsterAttack() {
            const attack = Math.floor(Math.random() * (15 - 1)) + 5
            this.healthBarPlayer -= attack
        },
        combinedAttack() {

        },
        add(attack) {
            if (attack > 10) {
                const criticalStrike = attack + 20
                this.attack(criticalStrike)
            }
        },
        subtract() {
            if (attack === 10) {
                this.healthBarMonsters - 15
            }
            this.monsterAttack()
            this.monsterAttack()
        },
        multiply() {
            alert('COMING SOON')
        },
        divide() {
            alert('COMING SOON')
        }
    }
})

app.mount("#game")