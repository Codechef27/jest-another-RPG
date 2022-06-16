const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');

const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Brad');

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );

    expect(player.name).toBe('Brad');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});




