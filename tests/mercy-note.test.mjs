// At LV 9 and above the menu says once that Mercy is gone
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openChat, overlay, command, press } from './env.mjs';

test('the Mercy line shows once, however often the menu is redrawn', async () => {
    await openChat([], { vael_battle: { kills: 30, exp: 150, hp: 20, fk: { L: 0, C: 0, Q: 0, N: 0 }, dead: [], spared: [], items: [], handled: [], milestones: {} } });
    command('battle', 'A stranger');
    const count = () => (overlay().textContent.match(/Mercy isn't for you anymore/g) || []).length;
    assert.equal(count(), 1);
    for (let i = 0; i < 3; i++) { press('ACT'); press('BACK'); }
    assert.equal(count(), 1);
    assert.equal(overlay().querySelector('.vael-text').textContent, '* A stranger blocks the way.', 'the text box is left alone');
});
