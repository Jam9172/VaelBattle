// Vael Battle only shows its HUD and sends its status in chats where something Vael has happened
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { context, openChat, aiReply, state, hud, command } from './env.mjs';

const hudShown = () => !!hud() && !hud().hidden;
const status = () => context.prompts.vael_battle;

test('an unrelated chat is left alone', async () => {
    await openChat();
    await aiReply('Hello there, what shall we cook today?');
    assert.equal(state(), undefined, 'nothing is written into the chat');
    assert.equal(status(), '');
    assert.equal(hudShown(), false);
});

test('no chat open: nothing is sent', async () => {
    context.chat = []; context.chatMetadata = undefined;
    await openChat.call(null, [], undefined);
    assert.equal(status(), '');
    assert.equal(hudShown(), false);
});

test('a chat that only got the old empty state is left alone too', async () => {
    await openChat([], { vael_battle: { kills: 0, exp: 0, hp: 20, fk: { L: 0, C: 0, Q: 0, N: 0 }, dead: [], spared: [], items: [], handled: ['0:123', '1:456'], milestones: {} } });
    assert.equal(status(), '');
    assert.equal(hudShown(), false);
});

test('the first [ITEM] or [BATTLE] makes it a Vael chat', async () => {
    await openChat();
    await aiReply('You find bread. [ITEM: Bread]');
    assert.match(status(), /^\[VAEL STATUS\] Kills: 0\/50/);
    assert.equal(hudShown(), true);
});

test('/vael turns it on for a chat, /vaeloff turns it off', async () => {
    await openChat();
    command('vael');
    assert.match(status(), /^\[VAEL STATUS\]/);
    assert.equal(hudShown(), true);
    command('vaeloff');
    assert.equal(status(), '');
    assert.equal(hudShown(), false);
    assert.equal(state(), undefined);
});

test('a chat with Vael progress stays a Vael chat', async () => {
    await openChat([], { vael_battle: { kills: 3, exp: 6, hp: 20, fk: { L: 3, C: 0, Q: 0, N: 0 }, dead: ['Burr'], spared: [], items: [], handled: [], milestones: {} } });
    assert.match(status(), /Kills: 3\/50/);
    assert.equal(hudShown(), true);
});
