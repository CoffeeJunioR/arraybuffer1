import Character from "../src/character";

test('Проверка создания класса Character', () => {
    const character = new Character(40);
    const expectedCharacter = {
        defaultAttack: 40,
        stoned: false
    }
    expect(character).toEqual(expectedCharacter);
});


test('Проверка getAttack, если stoned = false', () => {
    const character = new Character(40);
    const expectedAttack = 36;
    expect(character.getAttack(2)).toBe(expectedAttack);
})

test('Проверка getAttack, если stoned = true', () => {
    const character = new Character(40);
    character.setStoned()
    const expectedAttack = 31;
    expect(character.getAttack(2)).toBe(expectedAttack);
})

test('Проверка getStoned', () => {
    const character = new Character(40);
    const expectedCharacter = {
        defaultAttack: 40,
        stoned: false
    }
    expect(character.getStoned()).toBe(expectedCharacter.stoned)
})