// [BATTLE: Name] and /battle Name pick the enemy by its name, not by any text that happens to contain it
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openChat, overlay, command, toasts } from './env.mjs';

const fights = (name) => globalThis.findEnemy(name).name;

test('a known enemy is found by its name, alone or inside what was written', () => {
    for (const written of ['Wick', 'wick', ' WICK ', 'Captain Wick', 'Wick, the heron recruit', 'Wick (wounded)']) assert.equal(fights(written), 'Wick', written);
    assert.equal(fights('Tor'), 'Tor');
});

test('a name that only contains an enemy\'s name is someone else', () => {
    for (const written of ['Storm Raider', 'Mossy Golem', 'Hobgoblin', 'Fenwick', 'guard', 'young heron recruit']) {
        const enemy = globalThis.findEnemy(written);
        assert.equal(enemy.name, written, written);
        assert.equal(enemy.generic, true, written);
    }
});

test('/battle with no name starts nothing', async () => {
    await openChat();
    command('battle', '   ');
    assert.equal(overlay(), null);
    assert.ok(toasts.length > 0, 'says why');
});
