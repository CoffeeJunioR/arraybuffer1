import Character from "../src/character";

test('Проверка создания класса Character', () => {
    const character = new Character();
    const expectedCharacter = {
        _stoned: false
    }
    expect(character).toEqual(expectedCharacter);
});


test('Проверка getAttack, если stoned = false', () => {
    const character = new Character();
    character.attack = 40;
    character.distance = 3;
    const expectedAttack = 28;
    expect(character.attack).toBe(expectedAttack);
})

test('Проверка getAttack, если stoned = true', () => {
    const character = new Character();
    character.stoned = true;
    character.attack = 40;
    character.distance = 2;
    const expectedAttack = 27;
    expect(character.attack).toBe(expectedAttack);
})

test('Проверка getStoned', () => {
    const character = new Character();
    const expectedCharacter = {
        _stoned: true
    }
    character.stoned = true;
    expect(character.stoned).toBe(expectedCharacter._stoned)
})