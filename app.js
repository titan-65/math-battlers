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
            this.healthBarMonsters -= attack
            this.monsterAttack()
        },
        monsterAttack() {
            const attack = Math.floor(Math.random() * (15 - 1)) + 5
            this.healthBarPlayer -= attack
        },
        add(attack) {
            if (attack > 10) {
                const criticalStrike = attack + 20
                this.attack(criticalStrike)
            }
        },
        subtract() {

        },
        multiply() {

        },
        divide() {

        }
    }
})

app.mount("#game")