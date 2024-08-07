import Character from "../src/character";
import Magician from "../src/magician";

test('Проверка создания класса Magician', () => {
    const magician = new Magician(40);
    const expectedMagician = {
        stoned: false
    }
    expect(magician).toEqual(expectedMagician);
});