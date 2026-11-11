// Names the AI writes ([ITEM: ...], [BATTLE: ...]) are shown as text, never run as HTML
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openChat, aiReply, hud, overlay, press, flee } from './env.mjs';

const BAD = 'x<img src=x onerror="globalThis.__ran=1"><b class="injected">y</b>';
const injected = () => document.querySelector('.injected, img[onerror]');

test('names the AI writes are shown as text (HUD, battle text, item menu)', async () => {
    await openChat();
    await aiReply(`You find something. [ITEM: ${BAD}]`);
    assert.equal(injected(), null, 'HUD');
    assert.ok(hud().textContent.includes('x<img'), 'the item name is shown');

    await aiReply(`[BATTLE: ${BAD}]`);
    assert.ok(overlay(), 'battle started');
    assert.equal(injected(), null, 'battle text');
    assert.ok(overlay().querySelector('.vael-text').textContent.includes(`${BAD} blocks the way`), 'the name is shown as written');
    press('ITEM');
    assert.equal(injected(), null, 'item menu');
    press(BAD); // eat it
    assert.equal(injected(), null, 'after using the item');
    assert.match(overlay().querySelector('.vael-text').textContent, /You ate the x<img[\s\S]*\n\* You recovered 10 HP\./);
    await flee();
    assert.equal(injected(), null);
    assert.equal(overlay(), null, 'battle over');
});
