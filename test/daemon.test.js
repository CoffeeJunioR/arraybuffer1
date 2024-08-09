import Character from "../src/character";
import Daemon from "../src/daemon";

test('Проверка создания класса Daemon', () => {
    const daemon = new Daemon;
    const expectedDaemon = {
        _stoned: false
    }
    expect(daemon).toEqual(expectedDaemon);
});