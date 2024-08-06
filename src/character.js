export default class Character {
    constructor(defaultAttack) {
        this.defaultAttack = defaultAttack;
        this.stoned = false;
    }

    getAttack(distance) {
        let attack = this.defaultAttack * (1 - (distance - 1) * 0.1);

        if (this.stoned) {
            attack -= Math.log2(distance) * 5;
        };

        return attack;
    }

    setStoned() {
        this.stoned = true;
    }

    getStoned() {
        return this.stoned;
    }
}