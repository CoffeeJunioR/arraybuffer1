import Character from "../src/character";
import Magician from "../src/magician";

test('Проверка создания класса Magician', () => {
    const magician = new Magician;
    const expectedMagician = {
        _stoned: false
    }
    expect(magician).toEqual(expectedMagician);
});