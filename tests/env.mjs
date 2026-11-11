// Test environment: runs the extension's real index.js in jsdom against a stand-in for
// SillyTavern.getContext() (events, chat, chat metadata, the prompt slot, slash commands).
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const dom = new JSDOM('<!doctype html><html><body><div id="sheld"><div id="chat"></div><div id="form_sheld"><div id="send_form"></div></div></div></body></html>', { pretendToBeVisual: true });
for (const k of ['window', 'document', 'HTMLElement', 'Node', 'requestAnimationFrame', 'cancelAnimationFrame']) {
    try { globalThis[k] = dom.window[k]; } catch { /* read-only in this Node */ }
}
dom.window.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get: () => () => {} });

const handlers = {};
export const toasts = [];
globalThis.toastr = { info: (msg) => toasts.push(msg) };

/** The stand-in context. Tests change `chat` and `chatMetadata` to open another chat. */
export const context = {
    chat: [],
    chatMetadata: {},
    eventSource: { on: (type, fn) => { (handlers[type] ||= []).push(fn); } },
    event_types: new Proxy({}, { get: (_, k) => String(k) }),
    prompts: {},
    setExtensionPrompt(key, value) { this.prompts[key] = value; },
    saveMetadata() {},
    sent: [],
    async executeSlashCommandsWithOptions(command) { this.sent.push(command); },
    commands: {},
    registerSlashCommand(name, fn) { this.commands[name] = fn; },
};
globalThis.SillyTavern = { getContext: () => context };

// index.js is a plain script; run it in this global scope like the page does
const source = readFileSync(fileURLToPath(new URL('../index.js', import.meta.url)), 'utf8');
(0, eval)(source);

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export async function emit(type, ...args) { for (const fn of handlers[type] || []) await fn(...args); await sleep(80); }
/** Opens a fresh chat. */
export async function openChat(messages = [], metadata = {}) {
    context.chat = messages; context.chatMetadata = metadata; context.sent.length = 0; toasts.length = 0;
    document.querySelector('#vael-overlay')?.remove();
    await emit('CHAT_CHANGED');
}
/** The AI writes a reply (or a new swipe of the last one, with `swipe: true`). */
export async function aiReply(text, { swipe = false } = {}) {
    if (swipe) context.chat[context.chat.length - 1].mes = text;
    else context.chat.push({ is_user: false, mes: text });
    await emit('MESSAGE_RECEIVED', context.chat.length - 1);
}
export const state = () => context.chatMetadata.vael_battle;
export const hud = () => document.querySelector('#vael-hud');
export const overlay = () => document.querySelector('#vael-overlay');
export const command = (name, value = '') => context.commands[name]({}, value);
export function press(label) {
    const button = [...document.querySelectorAll('#vael-overlay .vael-btn')].find((b) => b.textContent.replace(/^\* /, '') === label);
    if (!button) throw new Error(`No "${label}" button; have: ${[...document.querySelectorAll('#vael-overlay .vael-btn')].map((b) => b.textContent).join(', ')}`);
    button.click();
}

/** Waits until the battle screen is gone. */
export async function battleOver() { for (let i = 0; i < 60 && overlay(); i++) await sleep(100); }
/** Ends the open battle by fleeing (a stranger can be fled from; the 50% roll is made to succeed). */
export async function flee() {
    const random = Math.random; Math.random = () => 0;
    try {
        for (let i = 0; i < 80 && !document.querySelector('#vael-overlay .vael-menu .vael-btn'); i++) await sleep(100);
        press('MERCY'); press('Flee');
        await battleOver();
    } finally { Math.random = random; }
}
