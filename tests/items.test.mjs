// An [ITEM: ...] is given by the reply that is shown: a swipe, a Regenerate or a delete takes back what
// the replaced text gave
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { context, openChat, aiReply, emit, state, command } from './env.mjs';

test('swiping a reply does not give its item again', async () => {
    await openChat();
    await aiReply('She hands you something. [ITEM: Honeycomb]');
    assert.deepEqual(state().items, ['Honeycomb']);
    await aiReply('She presses it into your hands. [ITEM: Honeycomb]', { swipe: true });
    await aiReply('"Take it," she says. [ITEM: Honeycomb]', { swipe: true });
    assert.deepEqual(state().items, ['Honeycomb']);
    assert.match(context.prompts.vael_battle, /Items: Honeycomb$/);
});

test('swiping to a reply without the item takes it back', async () => {
    await aiReply('She walks past without a word.', { swipe: true });
    assert.deepEqual(state().items, []);
    assert.match(context.prompts.vael_battle, /Items: none$/);
});

test('flipping back to an earlier swipe gives what that swipe gave', async () => {
    context.chat.at(-1).mes = 'She hands you something. [ITEM: Honeycomb] [ITEM: Bread]';
    await emit('MESSAGE_SWIPED', context.chat.length - 1);
    assert.deepEqual(state().items, ['Honeycomb', 'Bread']);
});

test('deleting the reply takes its items back; items from commands stay', async () => {
    command('vaelitem', 'River Tea');
    context.chat.pop();
    await emit('MESSAGE_DELETED', context.chat.length);
    assert.deepEqual(state().items, ['River Tea']);
});

test('the same reply scanned twice gives its item once', async () => {
    await aiReply('A gift. [ITEM: Dried Fish]');
    await emit('MESSAGE_RECEIVED', context.chat.length - 1);
    assert.deepEqual(state().items, ['River Tea', 'Dried Fish']);
});
