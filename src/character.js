export default class Character {
    constructor() {
        this._stoned = false;
    }

    set attack(attackValue) {
        this._defaultAttack = attackValue;
    };

    get attack() {
        let attackWithDistance = this.calculateAttackWithDistance(this._distance);
        if (this._stoned) {
          attackWithDistance -= Math.log2(this._distance) * 5;
        }
        return attackWithDistance;
    };

    set stoned(booleanValue) {
        this._stoned = booleanValue;
    };

    get stoned() {
        return this._stoned;
    };
    
    set distance(distance) {
        this._distance = distance;
    };

    calculateAttackWithDistance(distance) {
        return Math.max(0, this._defaultAttack * (1 - distance * 0.1)); 
    };
}