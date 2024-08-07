import Character from "../src/character";

test('Проверка создания класса Character', () => {
    const character = new Character(40);
    const expectedCharacter = {
        stoned: false
    }
    expect(character).toEqual(expectedCharacter);
});


test('Проверка getAttack, если stoned = false', () => {
    const character = new Character();
    character.setAttack(40);
    character.setDistance(3);
    const expectedAttack = 28;
    expect(character.getAttack()).toBe(expectedAttack);
})

test('Проверка getAttack, если stoned = true', () => {
    const character = new Character();
    character.setStoned()
    character.setAttack(40);
    character.setDistance(2);
    const expectedAttack = 27;
    expect(character.getAttack(2)).toBe(expectedAttack);
})

test('Проверка getStoned', () => {
    const character = new Character();
    const expectedCharacter = {
        stoned: false
    }
    expect(character.getStoned()).toBe(expectedCharacter.stoned)
})