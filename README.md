# Vael Battle

A SillyTavern extension that adds turn-based battles in the style of classic indie RPGs to *The Vael* roleplay.

- **FIGHT:** stop the slider on the post for a critical hit. Early is weaker, and late fades fast.
- **ACT:** opponent-specific actions that make them spareable.
- **ITEM:** heal with items the AI hands out using `[ITEM: Name]`.
- **MERCY:** spare or flee. Locked at LV 9 and above, except in the redemption moment.
- **Enemy turn:** dodge in a box with arrow keys or WASD, or by dragging on touch screens.

It tracks kills, EXP, LV, HP and items per chat, shows them in a bar above the message box (click it to collapse), and passes them to the AI. Battle results are posted back into the chat automatically.

It only does this in Vael chats. A chat becomes one the first time the AI writes `[BATTLE: Name]` or `[ITEM: Name]`, or when you use one of the commands below; other chats get no bar, no status in the prompt and no saved data. An item belongs to the reply that gave it: swiping, editing, regenerating or deleting that reply takes the item back or replaces it.

## Install

In SillyTavern, open **Extensions**, then **Install extension**, and paste this repository's URL.

## How battles start

The AI writes `[BATTLE: Name]` on its own line, or you type `/battle Name`.

## Commands

| Command | What it does |
| --- | --- |
| `/battle Wick` | Start a battle |
| `/battle Quill redemption` | Start the Last Mercy version |
| `/vael` | Show your stats (and make this a Vael chat) |
| `/vaeloff` | Turn Vael Battle off for this chat and forget its stats |
| `/vaelitem Bread` | Add an item |
| `/vaelset 12 30` | Set kills and EXP |
| `/vaelreset` | Reset this chat's stats |

Made for use with The Vael lorebook, system prompt and persona.
