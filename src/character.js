export default class Character {
    constructor() {
        this.stoned = false;
    }

    setAttack(attackValue) {
        this.defaultAttack = attackValue;
    };

    getAttack() {
        let attackWithDistance = this.calculateAttackWithDistance(this.distance);
        if (this.stoned) {
          attackWithDistance -= Math.log2(this.distance) * 5;
        }
        return attackWithDistance;
    };

    setStoned() {
        this.stoned = true;
    };

    getStoned() {
        return this.stoned;
    };

    calculateAttackWithDistance(distance) {
        return Math.max(0, this.defaultAttack * (1 - distance * 0.1)); 
    };
    
      setDistance(distance) {
        this.distance = distance;
    };
}