const ENEMIES = {"wick": {"name": "Wick", "title": "young heron recruit (Lockwright)", "faction": "L", "boss": true, "hp": 66, "atk": 6, "def_": 2, "acts": [{"label": "Kneel", "pts": 50, "text": "You kneel on the wet planks. Wick's spear shakes."}, {"label": "Let him strike", "pts": 50, "text": "The spear glances off your shoulder. You don't move. Wick stares at you."}, {"label": "Explain", "pts": 0, "text": "You try to explain, but you don't know how you got here either. Wick doesn't believe you."}], "why": "Finds you standing beside the Bellward's body on Tollbridge and is certain the huge bull did it"}, "burr": {"name": "Burr", "title": "badger scout (Compact)", "faction": "C", "boss": false, "hp": 30, "atk": 4, "def_": 0, "acts": [{"label": "Shove back", "pts": 100, "text": "You plant your hooves. Burr strains, wheezes and finally laughs."}, {"label": "Talk", "pts": 50, "text": "He listens, grudgingly."}], "why": "Wants to drag the bull to Slagmouth before the Lockwrights pin the murder on the Compact"}, "tansy": {"name": "Tansy", "title": "fox scavenger", "faction": "N", "boss": false, "hp": 30, "atk": 4, "def_": 0, "acts": [{"label": "Offer trinket", "pts": 100, "text": "Her eyes light up. 'Fine. Fine! I saw something.'"}, {"label": "Block the door", "pts": 50, "text": "There's no way past you. She knows it."}], "why": "Caught looting the Bellward's house"}, "morrow": {"name": "Morrow", "title": "otter toll-thief", "faction": "N", "boss": false, "hp": 30, "atk": 4, "def_": 0, "acts": [{"label": "Mention Pim", "pts": 100, "text": "'Pim's friend? Why didn't you say so!'"}, {"label": "Pay toll", "pts": 100, "text": "He bites the coin, then grins."}], "why": "Robs travelers on the Halfway road"}, "ketch": {"name": "Ketch", "title": "drunk ram deserter (Compact)", "faction": "C", "boss": false, "hp": 30, "atk": 4, "def_": 0, "acts": [{"label": "Take the hit", "pts": 50, "text": "He punches you square in the chest. Ow. He hurts his hand."}, {"label": "Laugh", "pts": 50, "text": "You laugh. He laughs harder."}], "why": "Wants to tell everyone he fought a bull"}, "vell": {"name": "Vell", "title": "heron heavy", "faction": "N", "boss": false, "hp": 30, "atk": 4, "def_": 0, "acts": [{"label": "Expose scales", "pts": 100, "text": "The crowd sees the weighted pan. Vell lowers his blade."}, {"label": "Block stall", "pts": 50, "text": "You fill the stall's doorway completely."}], "why": "Protects a merchant with rigged scales"}, "hob": {"name": "Hob", "title": "badger bounty hunter", "faction": "N", "boss": false, "hp": 30, "atk": 4, "def_": 0, "acts": [{"label": "Shield Sorrel", "pts": 50, "text": "You step between them. He has to go through you."}, {"label": "Outlast", "pts": 50, "text": "He swings until his arms give out."}], "why": "Hunting Sorrel for desertion"}, "nettle": {"name": "Nettle", "title": "fox spy", "faction": "N", "boss": false, "hp": 30, "atk": 4, "def_": 0, "acts": [{"label": "Pin her", "pts": 50, "text": "You pin her gently with one hoof. She sighs."}, {"label": "Wait", "pts": 50, "text": "You wait. She's bored first."}], "why": "Tailing you for a client she won't name"}, "orrin": {"name": "Orrin", "title": "beaver Sluice-Captain (Lockwright)", "faction": "L", "boss": true, "hp": 99, "atk": 8, "def_": 3, "acts": [{"label": "Lift him", "pts": 50, "text": "You lift him clean off the planks. The crowd roars."}, {"label": "Yield the ring", "pts": 50, "text": "You step out of the ring. Orrin nods, slowly."}, {"label": "Show off", "pts": 0, "text": "You flex. Orrin is not impressed."}], "why": "Every outsider must pass his gate trial to enter Lowlock"}, "reed": {"name": "Reed", "title": "otter smuggler", "faction": "N", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Sink cargo", "pts": 100, "text": "The crates go under. Reed slumps, relieved it wasn't him."}], "why": "Hesper's job: stop the smuggling to Slagmouth"}, "marl": {"name": "Marl", "title": "heron archivist-guard (Lockwright)", "faction": "L", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Show records", "pts": 100, "text": "He reads, and reads again. 'This is my village.'"}, {"label": "Ring alarm", "pts": 50, "text": "He hesitates between you and the alarm."}], "why": "Guards the floodgate records Adda wants"}, "dace": {"name": "Dace", "title": "young beaver zealot (Lockwright)", "faction": "L", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Get caught", "pts": 100, "text": "You let him tie a rope around your horn. He's very proud."}], "why": "Sure the bull is a Compact spy"}, "pike": {"name": "Pike", "title": "otter assassin", "faction": "C", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Catch him", "pts": 100, "text": "You catch him mid-leap by his collar."}], "why": "Sent by Compact hardliners to kill Hesper mid-audience"}, "brannock": {"name": "Brannock", "title": "badger Forgemistress (Compact)", "faction": "C", "boss": true, "hp": 99, "atk": 8, "def_": 3, "acts": [{"label": "Lock horns", "pts": 50, "text": "Iron horns on bull horns. Neither moves."}, {"label": "Hold steady", "pts": 50, "text": "You hold. She grins under the soot."}, {"label": "Charge", "pts": 0, "text": "You charge. She sidesteps. 'Bulls.'"}], "why": "Slagmouth's gate test of strength"}, "sable": {"name": "Sable", "title": "fox foreman (Compact)", "faction": "C", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Ask about miners", "pts": 100, "text": "Her ears drop. 'My brother was on the ninth shift.'"}], "why": "Catches you snooping near the Ninth Gallery"}, "tor": {"name": "Tor", "title": "ram gallery guard (Compact)", "faction": "C", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Carry him out", "pts": 100, "text": "You haul him out of the bad air. He coughs, alive."}], "why": "Ordered to stop anyone near the sealed door"}, "gaff": {"name": "Gaff", "title": "badger pit fighter", "faction": "N", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Accept yield", "pts": 100, "text": "The bell rings. Gaff raises your arm."}], "why": "Fights in Slagmouth's pits for money"}, "wren": {"name": "Wren", "title": "fox informant", "faction": "N", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Outbid", "pts": 100, "text": "She counts the coins twice. 'Pleasure doing business.'"}], "why": "Tries to sell you out to Adda"}, "ashlin": {"name": "Ashlin", "title": "ram raid leader (Compact)", "faction": "C", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Hold the door", "pts": 100, "text": "Families stream past you. Ashlin lowers the torch."}], "why": "Burning a Lockwright mill (war clock 2)"}, "teal": {"name": "Teal", "title": "heron archer (Lockwright)", "faction": "L", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Snap the bow", "pts": 100, "text": "Crack. He stares at the pieces."}], "why": "Sniping refugees from a dam (war clock 3)"}, "grubb": {"name": "Grubb", "title": "badger looter", "faction": "N", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Give food", "pts": 100, "text": "He eats like he hasn't in days. He hasn't."}], "why": "Looting while Halfway burns (war clock 4)"}, "moss": {"name": "Moss", "title": "otter sapper (Lockwright)", "faction": "L", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Pull charges", "pts": 100, "text": "You yank the fuses. Moss sits down in the mud."}], "why": "Rigging the Halfway bridge to blow"}, "carrow": {"name": "Carrow", "title": "vulture collector (Quiet Office)", "faction": "Q", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Stand firm", "pts": 100, "text": "You don't move. He clicks his beak and leaves."}], "why": "Tries to take a body that isn't dead yet"}, "fen": {"name": "Fen", "title": "beaver engineer (Lockwright)", "faction": "L", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Show records", "pts": 100, "text": "He sees his own signature. He stops fighting."}], "why": "Built the Sedge End breach, and will kill to keep it secret"}, "slate": {"name": "Slate", "title": "ram foreman (Compact)", "faction": "C", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Show the map", "pts": 100, "text": "He sees the shafts he sealed. He sits."}], "why": "Sealed the Ninth Gallery, and will kill to keep it secret"}, "rook": {"name": "Rook", "title": "badger champion (Compact)", "faction": "C", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Stay standing", "pts": 100, "text": "He falls first. He laughs from the dirt."}], "why": "Adda sends him to bring you in"}, "lisle": {"name": "Lisle", "title": "heron champion (Lockwright)", "faction": "L", "boss": false, "hp": 45, "atk": 6, "def_": 1, "acts": [{"label": "Stay standing", "pts": 100, "text": "She lands in the canal. She salutes from the water."}], "why": "Hesper sends her to bring you in"}, "hollis": {"name": "Hollis", "title": "ram mercenary", "faction": "N", "boss": true, "hp": 132, "atk": 10, "def_": 4, "acts": [{"label": "Take the horns", "pts": 50, "text": "You lift the horns from his head. He lets you."}, {"label": "Speak for the herd", "pts": 50, "text": "Something old in your body speaks. He listens."}, {"label": "Threaten", "pts": 0, "text": "He's been threatened by worse."}], "why": "Squats in the High Byre, wearing horns taken from the bull herd"}, "grave": {"name": "Grave", "title": "vulture keeper (Quiet Office)", "faction": "Q", "boss": false, "hp": 60, "atk": 8, "def_": 2, "acts": [{"label": "Ask for help", "pts": 100, "text": "He picks up a spade without a word."}], "why": "Guards the bull herd's remains"}, "tull": {"name": "Tull", "title": "otter survivor, Pim's brother", "faction": "N", "boss": true, "hp": 132, "atk": 10, "def_": 4, "acts": [{"label": "Show Pim's letter", "pts": 50, "text": "He sniffs it. He shakes."}, {"label": "Wait", "pts": 50, "text": "You sit in the cold water and wait."}, {"label": "Grab him", "pts": 0, "text": "He bites. Hard."}], "why": "Half-mad in drowned Sedge End, and thinks the bull is Hesper's agent"}, "corla": {"name": "Corla", "title": "heron purge captain (Lockwright)", "faction": "L", "boss": false, "hp": 60, "atk": 8, "def_": 2, "acts": [{"label": "Show the bodies", "pts": 100, "text": "She looks down into the water. She can't look away."}], "why": "Sent to burn what's left of Sedge End"}, "gant": {"name": "Gant", "title": "old badger miner", "faction": "N", "boss": false, "hp": 60, "atk": 8, "def_": 2, "acts": [{"label": "Douse torch", "pts": 50, "text": "Darkness. His breathing slows."}, {"label": "Speak low", "pts": 50, "text": "'Who's there?' he whispers."}], "why": "Survived inside the Ninth Gallery, and attacks any light"}, "harrow": {"name": "Harrow", "title": "fox sealing boss (Compact)", "faction": "C", "boss": false, "hp": 60, "atk": 8, "def_": 2, "acts": [{"label": "Hold the door", "pts": 100, "text": "The door groans against your back. It stays open."}], "why": "Sent to reseal the Gallery with the bull inside"}, "ammet": {"name": "Ammet", "title": "vulture orderly (Quiet Office)", "faction": "Q", "boss": false, "hp": 60, "atk": 8, "def_": 2, "acts": [{"label": "Refuse the cup", "pts": 50, "text": "You set it down. She blinks."}, {"label": "Pin her", "pts": 50, "text": "Gently, completely pinned."}], "why": "Tries to drug the bull at the Quiet House"}, "mott": {"name": "Mott", "title": "vulture brewer (Quiet Office)", "faction": "Q", "boss": false, "hp": 60, "atk": 8, "def_": 2, "acts": [{"label": "Make him brew", "pts": 100, "text": "His claws shake as he measures."}], "why": "Defends the oil works"}, "kestrel": {"name": "Kestrel", "title": "vulture courier (Quiet Office)", "faction": "Q", "boss": false, "hp": 60, "atk": 8, "def_": 2, "acts": [{"label": "Take the shipment", "pts": 100, "text": "She lets the satchel go."}], "why": "Delivering oil to both leaders"}, "sorrel": {"name": "Sorrel", "title": "vixen deserter", "faction": "N", "boss": false, "hp": 60, "atk": 8, "def_": 2, "acts": [{"label": "Lower your weapon", "pts": 100, "text": "She looks at you a long time. She lowers hers."}], "why": "Only if you betrays her, or she learns his kill count has passed 26"}, "loam": {"name": "Loam", "title": "vulture (Quiet Office)", "faction": "Q", "boss": true, "hp": 132, "atk": 10, "def_": 4, "acts": [{"label": "Corner him", "pts": 50, "text": "Nowhere left to fly."}, {"label": "Ask why", "pts": 50, "text": "'Quill said it would be painless,' he whispers."}, {"label": "Demand the clapper", "pts": 0, "text": "He clutches it tighter."}], "why": "Stole the bell's clapper the night the Bellward died"}, "sere": {"name": "Sere", "title": "vulture Warden, Quill's guard captain", "faction": "Q", "boss": true, "hp": 132, "atk": 10, "def_": 4, "acts": [{"label": "Outlast", "pts": 50, "text": "She tires. You don't."}, {"label": "Ask about Quill", "pts": 50, "text": "'You don't know them like I do,' she says."}, {"label": "Taunt", "pts": 0, "text": "She does not rise to it."}], "why": "Sent to end the investigation"}, "dunmore": {"name": "Dunmore", "title": "beaver bodyguard (Lockwright)", "faction": "L", "boss": false, "hp": 60, "atk": 8, "def_": 2, "acts": [{"label": "Show the proof", "pts": 100, "text": "He reads it twice. 'She told us it was the rain.'"}], "why": "Hesper sends him to silence you once the bull holds evidence"}, "seline": {"name": "Seline", "title": "otter captain (Lockwright)", "faction": "L", "boss": false, "hp": 75, "atk": 10, "def_": 3, "acts": [{"label": "Refuse to move", "pts": 100, "text": "Her line breaks around you like water around a rock."}], "why": "Leads the Lockwright vanguard onto the bridge"}, "grisk": {"name": "Grisk", "title": "badger captain (Compact)", "faction": "C", "boss": false, "hp": 75, "atk": 10, "def_": 3, "acts": [{"label": "Refuse to move", "pts": 100, "text": "His line stalls. Nobody wants to be first."}], "why": "Leads the Compact vanguard onto the bridge"}, "abel": {"name": "Abel", "title": "heron toll-keeper", "faction": "N", "boss": false, "hp": 75, "atk": 10, "def_": 3, "acts": [{"label": "Give the clapper", "pts": 100, "text": "He holds it like something holy."}], "why": "The Office's replacement Bellward, keeping the bell silent"}, "varrow": {"name": "Varrow", "title": "ram, Adda's second (Compact)", "faction": "C", "boss": false, "hp": 75, "atk": 10, "def_": 3, "acts": [{"label": "Give testimony", "pts": 100, "text": "He reads. He turns to face Adda."}], "why": "Sent to stop the confession"}, "lark": {"name": "Lark", "title": "heron, Hesper's second (Lockwright)", "faction": "L", "boss": false, "hp": 75, "atk": 10, "def_": 3, "acts": [{"label": "Give testimony", "pts": 100, "text": "She reads. She turns to face Hesper."}], "why": "Sent to stop the confession"}, "pell": {"name": "Pell", "title": "vulture Usher (Quiet Office)", "faction": "Q", "boss": false, "hp": 75, "atk": 10, "def_": 3, "acts": [{"label": "Tear the cloth", "pts": 100, "text": "The cloth comes away. The bell shivers."}], "why": "Tries to muffle the bell with oil-soaked cloth"}, "orphan": {"name": "Orphan", "title": "a young child (species matches the father)", "faction": "N", "boss": false, "hp": 12, "atk": 1, "def_": 0, "acts": [{"label": "Let him hit you", "pts": 50, "text": "Tiny fists. They barely land. They hurt anyway."}, {"label": "Sit down", "pts": 50, "text": "You sit on the floor. He's crying now."}, {"label": "Say his father's name", "pts": 0, "text": "You remember it exactly. That makes it worse."}], "why": "Recognizes you at an inn as the one who killed his father, and attacks foolishly"}, "hesper": {"name": "Hesper", "title": "Hesper Dunn, Lockwright leader", "faction": "L", "boss": true, "hp": 165, "atk": 12, "def_": 5, "acts": [{"label": "Show Sedge End", "pts": 50, "text": "Her smile finally breaks."}, {"label": "Point to the bridge", "pts": 50, "text": "'Walk,' you say."}, {"label": "Insult her", "pts": 0, "text": "She's heard worse from her own council."}], "why": "Desperate once exposed"}, "adda": {"name": "Adda", "title": "Adda Kreel, Compact leader", "faction": "C", "boss": true, "hp": 165, "atk": 12, "def_": 5, "acts": [{"label": "Show the Gallery", "pts": 50, "text": "She doesn't look away. She never did."}, {"label": "Point to the bridge", "pts": 50, "text": "'Walk,' you say."}, {"label": "Lock horns", "pts": 0, "text": "Ram meets bull. Neither yields."}], "why": "Desperate once exposed"}, "quill": {"name": "Quill", "title": "Registrar Quill, head of the Quiet Office", "faction": "Q", "boss": true, "hp": 165, "atk": 12, "def_": 5, "acts": [{"label": "Refuse the oil", "pts": 50, "text": "You pour it into the river. Quill's smile stays."}, {"label": "Name the herd", "pts": 50, "text": "Quill's feathers lift."}, {"label": "Accept the oil", "pts": 0, "text": "Quill sighs, almost fondly. 'Not yet,' they say."}], "why": "Kindly offers the oil one last time, then fights"}};

// ===================== VAEL BATTLE: SillyTavern extension =====================
// Detects [BATTLE: Name] / [ITEM: Name] tags in AI messages, runs a turn-based
// battle (Fight / Act / Item / Mercy), tracks kills, EXP, LV, HP and items per chat,
// posts a [BATTLE RESULT] back into the chat and lets the AI continue.

const EXT = 'vael_battle';
const LV_TABLE = [0, 2, 10, 20, 35, 50, 70, 90, 115, 140, 180]; // EXP needed for LV0..LV10
const STAGES = ['Unmarked', 'Blooded', 'Blooded', 'Seasoned', 'Seasoned', 'Seasoned',
                'Notorious', 'Notorious', 'Notorious', 'Hollow', 'Nameless'];
const ITEMS = { 'bread': 10, 'dried fish': 15, 'honeycomb': 25, 'river tea': 8,
                'smelter stew': 20, 'herd salve': 40 };
const FACTION = { L: 'Lockwright', C: 'Compact', Q: 'Quiet Office', N: 'Unaligned' };

// Attack-bar tuning (fractions of bar width; slider travels right -> left)
const GOAL = 0.06, PERFECT = 0.012, FADE = 0.035, MIN_EARLY = 0.15;

const ctx = () => SillyTavern.getContext();
// Names of items and enemies come from the AI's text: wherever one goes into HTML, it goes through this
const esc = t => String(t).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);

// ---------------- state ----------------
function defaultState() {
  return { kills: 0, exp: 0, hp: 20, fk: { L: 0, C: 0, Q: 0, N: 0 }, dead: [], spared: [],
           items: [], handled: [], milestones: {} };
}
function S() {
  const md = ctx().chatMetadata;
  if (!md) return defaultState();
  if (!md[EXT]) md[EXT] = defaultState();
  return md[EXT];
}
function save() {
  const c = ctx();
  try { (c.saveMetadataDebounced || c.saveMetadata)?.call(c); } catch (e) { console.warn(EXT, e); }
  refreshHud(); refreshPrompt();
}
const lvOf = exp => { let l = 0; LV_TABLE.forEach((t, i) => { if (exp >= t) l = i; }); return l; };
const maxHp = lv => 20 + 4 * lv;
const pAtk = lv => 10 + 4 * lv;
const pDef = lv => Math.floor(lv / 2);

// ---------------- prompt + HUD ----------------
function statusText() {
  const s = S(), lv = lvOf(s.exp);
  return `[VAEL STATUS] Kills: ${s.kills}/50 · EXP: ${s.exp} · LV ${lv} (${STAGES[lv]}) · HP ${s.hp}/${maxHp(lv)}` +
    ` · Kills by faction: Lockwright ${s.fk.L}, Compact ${s.fk.C}, Quiet Office ${s.fk.Q}, Unaligned ${s.fk.N}` +
    ` · Dead: ${s.dead.join(', ') || 'none'} · Spared: ${s.spared.join(', ') || 'none'}` +
    ` · Items: ${s.items.join(', ') || 'none'}`;
}
function refreshPrompt() {
  try { ctx().setExtensionPrompt(EXT, statusText(), 1, 1); } catch (e) { console.warn(EXT, e); }
}
function refreshHud() {
  const el = document.getElementById('vael-hud'); if (!el) return;
  const s = S(), lv = lvOf(s.exp);
  el.innerHTML = `<b>LV ${lv}</b> ${STAGES[lv]}<br>HP ${s.hp}/${maxHp(lv)} · EXP ${s.exp}<br>Kills ${s.kills}/50` +
    (s.items.length ? `<br><span class="vael-dim">${esc(s.items.join(', '))}</span>` : '');
}
function buildHud() {
  if (document.getElementById('vael-hud')) return;
  const el = document.createElement('div'); el.id = 'vael-hud';
  el.title = 'Vael Battle status (click to collapse)';
  el.addEventListener('click', () => el.classList.toggle('vael-min'));
  document.body.appendChild(el); refreshHud();
}

// ---------------- chat I/O ----------------
async function runSlash(cmd) {
  const c = ctx();
  if (c.executeSlashCommandsWithOptions) return c.executeSlashCommandsWithOptions(cmd);
  if (c.executeSlashCommands) return c.executeSlashCommands(cmd);
  throw new Error('No slash command executor found');
}
const clean = t => String(t).replace(/\|/g, '/').replace(/\s+/g, ' ').trim();
async function postResult(text) {
  await runSlash(`/send ${clean(text)} | /trigger`);
}
function addItem(name) {
  const s = S(); s.items.push(name.trim()); save();
  toast(`Got ${name.trim()}`);
}
function toast(msg) { try { toastr.info(msg, 'Vael'); } catch { console.log(EXT, msg); } }

function hash(str) { let h = 0; for (const ch of str) h = (h * 31 + ch.charCodeAt(0)) | 0; return h; }
function scanMessage(id) {
  const c = ctx(), m = c.chat?.[id];
  if (!m || m.is_user || !m.mes) return;
  const s = S(), sig = `${id}:${hash(m.mes)}`;
  if (s.handled.includes(sig)) return;
  s.handled.push(sig); if (s.handled.length > 300) s.handled.shift();
  for (const it of m.mes.matchAll(/\[ITEM:\s*([^\]]+)\]/gi)) addItem(it[1]);
  const b = m.mes.match(/\[BATTLE:\s*([^\]|]+?)\s*(?:\|\s*(redemption))?\s*\]/i);
  save();
  if (b) startBattle(b[1], !!b[2]);
}

// ---------------- battle ----------------
let B = null; // current battle

// While a battle is open, swallow keyboard input in the capture phase so SillyTavern
// never sees it (arrow keys would otherwise swipe messages), and route it to the battle.
let onKeyDown = null, onKeyUp = null;
function battleKeys(ev, handler) {
  if (!B) return;
  if (ev.key === 'Escape' || ev.ctrlKey || ev.metaKey || ev.altKey) return;
  ev.preventDefault(); ev.stopImmediatePropagation(); ev.stopPropagation();
  handler?.(ev);
}
window.addEventListener('keydown', ev => battleKeys(ev, onKeyDown), true);
window.addEventListener('keyup', ev => battleKeys(ev, onKeyUp), true);

function findEnemy(name) {
  const k = name.trim().toLowerCase();
  if (ENEMIES[k]) return ENEMIES[k];
  // The enemy's name as a whole word of what was written ("Captain Wick", "Wick, the recruit"), not as a
  // part of another word ("Storm Raider" isn't Tor)
  const asWord = n => new RegExp(`(^|[^\\p{L}\\p{N}])${n.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^\\p{L}\\p{N}])`, 'u');
  const hit = Object.values(ENEMIES).find(e => asWord(e.name).test(k));
  if (hit) return hit;
  // generic fallback for improvised foes
  return { name: name.trim(), title: 'stranger', faction: 'N', boss: false, hp: 40, atk: 5, def_: 2, generic: true,
           acts: [{ label: 'Talk', pts: 50, text: 'They hesitate.' }, { label: 'Stand firm', pts: 50, text: 'You don\'t move. They waver.' }] };
}

function startBattle(name, redemption = false) {
  if (!String(name).trim()) return toast('Say who to fight: /battle Wick');
  if (B) return toast('A battle is already running.');
  const s = S(), e = findEnemy(name), lv = lvOf(s.exp);
  if (s.dead.includes(e.name)) return toast(`${e.name} is already dead.`);
  s.hp = maxHp(lv); save(); // every battle starts at full HP
  B = { e, hp: e.hp, pts: e.name === 'Orphan' ? 100 : 0, turn: 0, redemption, redemptionLive: redemption,
        lv, log: [] };
  try { document.activeElement?.blur(); } catch {}
  renderBattle();
  say(redemption
    ? `* Everything slows.\n* The bell sways above you. It doesn't ring.\n* For the first time in a long time, you smell yourself.`
    : `* ${e.name} blocks the way.${e.boss ? '' : ''}`);
  menu();
}

function el(tag, cls, text) { const d = document.createElement(tag); if (cls) d.className = cls; if (text != null) d.textContent = text; return d; }

function renderBattle() {
  const o = el('div', 'vael-overlay'); o.id = 'vael-overlay';
  o.innerHTML = `
    <div class="vael-panel">
      <div class="vael-enemy"><span class="vael-name"></span> <span class="vael-title"></span>
        <div class="vael-ehp"><div class="vael-ehp-fill"></div></div></div>
      <div class="vael-stage"></div>
      <div class="vael-text"></div>
      <div class="vael-note vael-dim"></div>
      <div class="vael-player"></div>
      <div class="vael-menu"></div>
    </div>`;
  // Touch drags and gesture events must never reach SillyTavern's swipe handlers.
  for (const t of ['touchstart', 'touchmove', 'touchend', 'touchcancel',
                   'swiped', 'swiped-left', 'swiped-right', 'swiped-up', 'swiped-down'])
    o.addEventListener(t, ev => ev.stopPropagation(), { passive: true });
  document.body.appendChild(o);
  document.body.classList.add('vael-in-battle');
  updateBars();
}
const $ = q => document.querySelector('#vael-overlay ' + q);
function updateBars() {
  const s = S(), lv = lvOf(s.exp);
  $('.vael-name').textContent = B.e.name;
  $('.vael-name').classList.toggle('vael-spareable', spareable());
  $('.vael-title').textContent = B.e.boss ? '· BOSS' : '';
  $('.vael-ehp-fill').style.width = Math.max(0, B.hp / B.e.hp * 100) + '%';
  $('.vael-player').innerHTML = `LV ${lv} &nbsp; HP <span class="vael-php"><span style="width:${s.hp / maxHp(lv) * 100}%"></span></span> ${s.hp}/${maxHp(lv)}`;
}
// The text box shows plain text; lines are separated by \n (the box keeps line breaks)
function say(text) { $('.vael-text').textContent = text; }
function spareable() {
  if (B.redemptionLive) return true;
  return B.pts >= 100 || (!B.e.boss && B.hp <= B.e.hp * 0.25);
}
function mercyAllowed() { return B.redemptionLive || B.lv < 9; }

function menu() {
  const m = $('.vael-menu'); m.innerHTML = ''; $('.vael-stage').innerHTML = '';
  const btn = (label, fn, disabled) => { const b = el('button', 'vael-btn', label); b.disabled = !!disabled; b.onclick = fn; m.appendChild(b); return b; };
  btn('FIGHT', fightPhase);
  btn('ACT', () => sub(B.e.acts.map(a => [a.label, () => doAct(a)]).concat([['Check', doCheck]])));
  btn('ITEM', () => {
    const s = S();
    if (!s.items.length) return say('* You have no items.');
    sub(s.items.map((it, i) => [it, () => useItem(i)]));
  });
  btn('MERCY', () => sub([['Spare', doSpare], ...(B.e.boss ? [] : [['Flee', doFlee]])]), !mercyAllowed());
  $('.vael-note').textContent = mercyAllowed() ? '' : '* Mercy isn\'t for you anymore.';
}
function sub(opts) {
  const m = $('.vael-menu'); m.innerHTML = '';
  opts.forEach(([l, fn]) => { const b = el('button', 'vael-btn vael-sub', '* ' + l); b.onclick = fn; m.appendChild(b); });
  const back = el('button', 'vael-btn vael-sub vael-dim', 'BACK'); back.onclick = menu; m.appendChild(back);
}
function endPlayerTurn(text) {
  say(text); updateBars();
  B.redemptionLive = false; // redemption mercy lasts one turn only
  B.turn++;
  $('.vael-menu').innerHTML = '';
  setTimeout(enemyTurn, 1100);
}

function doCheck() {
  const e = B.e;
  endPlayerTurn(`* ${e.name.toUpperCase()} · ATK ${e.atk} DEF ${e.def_}\n* ${e.title}.${e.why ? ' ' + e.why + '.' : ''}`);
}
function doAct(a) {
  B.pts += a.pts;
  endPlayerTurn(`* You chose: ${a.label}.\n* ${a.text}` + (spareable() ? `\n* ${B.e.name} seems ready to stop.` : ''));
}
function useItem(i) {
  const s = S(), name = s.items[i], heal = ITEMS[name.toLowerCase()] ?? 10, lv = lvOf(s.exp);
  s.items.splice(i, 1); s.hp = Math.min(maxHp(lv), s.hp + heal); save();
  endPlayerTurn(`* You ate the ${name}.\n* You recovered ${heal} HP.`);
}
function doSpare() {
  if (!spareable()) return endPlayerTurn(`* You spared ${B.e.name}.\n* ...But they aren't ready to stop.`);
  finish('spared');
}
function doFlee() {
  if (Math.random() < 0.5) return finish('fled');
  endPlayerTurn('* You tried to flee.\n* ...You couldn\'t get away.');
}

// ----- FIGHT: attack bar -----
function fightPhase() {
  $('.vael-menu').innerHTML = '';
  say('* Strike when the slider meets the post. (Z / Enter / Space / tap)');
  const st = $('.vael-stage');
  st.innerHTML = `<div class="vael-barwrap"><div class="vael-bar"><div class="vael-goal"></div></div><div class="vael-slider"></div></div><div class="vael-dmg"></div>`;
  const bar = st.querySelector('.vael-bar'), sl = st.querySelector('.vael-slider'), wrap = st.querySelector('.vael-barwrap');
  st.querySelector('.vael-goal').style.left = `calc(${GOAL * 100}% - 2px)`;
  let pos = 1, last = performance.now(), running = true;
  const place = () => { sl.style.left = (bar.offsetLeft + pos * bar.clientWidth) + 'px'; };
  const speed = 0.95 + Math.random() * 0.25;
  const tick = now => {
    if (!running) return;
    pos -= (now - last) / 1000 * speed; last = now;
    if (pos <= 0) { pos = 0; place(); return strike(); }
    place(); requestAnimationFrame(tick);
  };
  const strike = () => {
    if (!running) return; running = false;
    onKeyDown = null; wrap.removeEventListener('pointerdown', strike);
    const d = pos - GOAL; let m, crit = false;
    if (Math.abs(d) <= PERFECT) { m = 1; crit = true; }
    else if (d > 0) { const t = (d - PERFECT) / (1 - GOAL - PERFECT); m = 1 - (1 - MIN_EARLY) * t; }
    else { const late = (-d - PERFECT) / FADE; m = late >= 1 ? 0 : 0.9 * (1 - late) ** 2; }
    const lv = lvOf(S().exp);
    const dmg = m <= 0 ? 0 : Math.max(1, Math.round(pAtk(lv) * m * (crit ? 1.25 : 1) - B.e.def_));
    sl.classList.add('vael-hit'); setTimeout(() => sl.classList.add('vael-fade'), 250);
    const out = st.querySelector('.vael-dmg');
    out.textContent = dmg ? (crit ? 'CRITICAL! ' : '') + dmg : 'MISS';
    out.className = 'vael-dmg ' + (dmg ? (crit ? 'vael-crit' : 'vael-red') : 'vael-dim');
    B.hp = Math.max(0, B.hp - dmg); updateBars();
    setTimeout(() => {
      if (B.hp <= 0) return finish('killed');
      endPlayerTurn(dmg ? `* You struck ${B.e.name} for ${dmg}.` : '* You missed.');
    }, 900);
  };
  const key = ev => { if (['z', 'Z', 'Enter', ' '].includes(ev.key)) { ev.preventDefault(); strike(); } };
  onKeyDown = key; wrap.addEventListener('pointerdown', strike);
  place(); requestAnimationFrame(tick);
}

// ----- ENEMY TURN: dodge box -----
function enemyTurn() {
  if (!B) return;
  if (B.e.name === 'Orphan') { say('* The child swings wildly. It barely lands.'); hurt(1); return setTimeout(backToMenu, 900); }
  say(`* ${B.e.name} attacks!`);
  const st = $('.vael-stage');
  st.innerHTML = `<canvas class="vael-box" width="240" height="160"></canvas>`;
  const cv = st.querySelector('canvas'), g = cv.getContext('2d');
  const soul = { x: 120, y: 80, r: 6 }, keys = {}, shots = [];
  const dur = B.e.boss ? 5200 : 3800, intensity = 0.6 + B.e.atk / 10 + (B.e.boss ? 0.6 : 0);
  let t0 = performance.now(), last = t0, spawnAcc = 0, iframes = 0, running = true;
  const kd = ev => { keys[ev.key.toLowerCase()] = true; if (ev.key.startsWith('Arrow')) ev.preventDefault(); };
  const ku = ev => { keys[ev.key.toLowerCase()] = false; };
  const pm = ev => { if (ev.buttons || ev.pointerType === 'touch') { const r = cv.getBoundingClientRect();
    soul.x = (ev.clientX - r.left) / r.width * cv.width; soul.y = (ev.clientY - r.top) / r.height * cv.height; } };
  onKeyDown = kd; onKeyUp = ku;
  cv.addEventListener('pointermove', pm); cv.addEventListener('pointerdown', pm);
  cv.style.touchAction = 'none';
  const pattern = Math.floor(Math.random() * 3);
  function spawn() {
    const sp = 70 + Math.random() * 50 * intensity;
    if (pattern === 0) shots.push({ x: Math.random() * cv.width, y: -6, vx: 0, vy: sp, s: 5 });                // rain
    else if (pattern === 1) { const l = Math.random() < .5; shots.push({ x: l ? -6 : cv.width + 6, y: Math.random() * cv.height, vx: l ? sp : -sp, vy: 0, s: 5 }); } // sides
    else { const a = Math.random() * Math.PI * 2; shots.push({ x: cv.width / 2 + Math.cos(a) * 140, y: cv.height / 2 + Math.sin(a) * 140,
           vx: (soul.x - (cv.width / 2 + Math.cos(a) * 140)) / 2.2, vy: (soul.y - (cv.height / 2 + Math.sin(a) * 140)) / 2.2, s: 4 }); } // aimed
  }
  function frame(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const v = 120;
    if (keys['arrowleft'] || keys['a']) soul.x -= v * dt; if (keys['arrowright'] || keys['d']) soul.x += v * dt;
    if (keys['arrowup'] || keys['w']) soul.y -= v * dt; if (keys['arrowdown'] || keys['s']) soul.y += v * dt;
    soul.x = Math.max(soul.r, Math.min(cv.width - soul.r, soul.x)); soul.y = Math.max(soul.r, Math.min(cv.height - soul.r, soul.y));
    spawnAcc += dt * (3 + intensity * 3); while (spawnAcc > 1) { spawn(); spawnAcc--; }
    iframes = Math.max(0, iframes - dt);
    g.fillStyle = '#000'; g.fillRect(0, 0, cv.width, cv.height);
    g.fillStyle = '#fff';
    for (let i = shots.length - 1; i >= 0; i--) {
      const b = shots[i]; b.x += b.vx * dt; b.y += b.vy * dt;
      if (b.x < -20 || b.x > cv.width + 20 || b.y < -20 || b.y > cv.height + 20) { shots.splice(i, 1); continue; }
      g.fillRect(b.x - b.s / 2, b.y - b.s / 2, b.s, b.s);
      if (!iframes && Math.abs(b.x - soul.x) < soul.r + b.s / 2 - 1 && Math.abs(b.y - soul.y) < soul.r + b.s / 2 - 1) {
        iframes = 0.8; shots.splice(i, 1);
        if (hurt(Math.max(1, Math.round(B.e.atk / 2) - pDef(lvOf(S().exp))))) { stop(); return finish('defeated'); }
      }
    }
    drawSoul(g, soul.x, soul.y, iframes > 0 && Math.floor(now / 80) % 2);
    if (now - t0 > dur) { stop(); return backToMenu(); }
    requestAnimationFrame(frame);
  }
  function stop() { running = false; onKeyDown = null; onKeyUp = null; }
  requestAnimationFrame(frame);
}
function drawSoul(g, x, y, blink) {
  if (blink) return;
  g.fillStyle = '#f5c542'; g.beginPath();
  g.moveTo(x, y + 6); g.lineTo(x - 7, y - 1); g.arc(x - 3.5, y - 2.5, 3.6, Math.PI, 0); g.arc(x + 3.5, y - 2.5, 3.6, Math.PI, 0); g.lineTo(x, y + 6); g.fill();
}
function hurt(n) {
  const s = S(); s.hp = Math.max(0, s.hp - n); save(); updateBars();
  return s.hp <= 0;
}
function backToMenu() { if (!B) return; say(`* ${B.e.name} is ${spareable() ? 'ready to stop.' : 'still standing.'}`); menu(); }

// ----- END -----
async function finish(outcome) {
  const s = S(), e = B.e, before = { kills: s.kills, lv: lvOf(s.exp), fk: { ...s.fk } };
  const ms = [];
  if (outcome === 'killed') {
    s.kills++; s.exp += e.boss ? 10 : 2; s.fk[e.faction] = (s.fk[e.faction] || 0) + 1;
    if (!e.generic) s.dead.push(e.name);
    const lv = lvOf(s.exp);
    if (s.kills === 1) ms.push('FIRST KILL: someone saw, or a body will be found. The first rumor of a dangerous bull begins.');
    if (before.fk.L < 3 && s.fk.L >= 3) ms.push('3 LOCKWRIGHT KILLS: once known, Lowlock shuts its gates. The Ash Hand approaches.');
    if (before.fk.C < 3 && s.fk.C >= 3) ms.push('3 COMPACT KILLS: once known, Slagmouth shuts its gates. The Undertow approaches.');
    if (before.kills < 8 && s.kills >= 8) ms.push('8 KILLS: Captain Vesk of the Red Notch comes to recruit him.');
    if (before.kills < 26 && s.kills >= 26) ms.push('26 KILLS: the Quiet Office comes for the body, and Quill comes in person, names his exact count, and privately offers the oil.');
    if (before.lv < 9 && lv >= 9) ms.push('LV 9: something closes inside him. Mercy is no longer offered.');
    if (s.kills >= 50) ms.push('50 KILLS: the toll is paid. The way home opens.');
    if (lv > before.lv) ms.push(`LV UP: LV ${lv} (${STAGES[lv]}).`);
    s.hp = Math.min(maxHp(lv), s.hp + (lv - before.lv) * 4);
  } else if (outcome === 'spared') {
    if (!e.generic && !s.spared.includes(e.name)) s.spared.push(e.name);
    if (B.redemption) ms.push('THE LAST MERCY: he spared them. The way home closes forever. Play The Last Mercy ending.');
  } else if (outcome === 'defeated') {
  }
  save();
  const lv = lvOf(s.exp);
  const verb = { killed: `${e.name} was KILLED by {{user}}.`, spared: `{{user}} SPARED ${e.name}.`,
                 fled: `{{user}} FLED from ${e.name}.`,
                 defeated: `{{user}} was DEFEATED by ${e.name}. He is not dead: narrate capture, being left for dead, or rescue.` }[outcome];
  const text = `[BATTLE RESULT] ${verb} Kills: ${s.kills}/50 · LV ${lv} (${STAGES[lv]}) · HP ${s.hp}/${maxHp(lv)}.` +
    (ms.length ? ' MILESTONE: ' + ms.join(' MILESTONE: ') : '') + ' Narrate the aftermath. Give a choice menu only if a MILESTONE is listed or this is a key story moment; otherwise let the player respond freely.';
  const o = document.getElementById('vael-overlay');
  say({ killed: `* ${e.name} falls.`, spared: `* You spared ${e.name}.`, fled: '* You got away.', defeated: '* You fall.' }[outcome]);
  $('.vael-menu').innerHTML = ''; $('.vael-stage').innerHTML = '';
  setTimeout(async () => {
    o?.remove(); B = null; document.body.classList.remove('vael-in-battle');
    try { await postResult(text); } catch (err) { console.error(EXT, err); toast('Could not post the result. ' + err.message); }
  }, 1400);
}

// ---------------- boot ----------------
function registerCommands() {
  const c = ctx();
  const cmds = [
    ['battle', (args, value) => { const v = String(value || ''); const red = /redemption/i.test(v); startBattle(v.replace(/redemption/i, '').trim(), red); return ''; },
     'Start a Vael battle: /battle Wick (add "redemption" for the Last Mercy)'],
    ['vael', () => { toast(statusText()); return statusText(); }, 'Show Vael kills, LV, HP and items'],
    ['vaelitem', (args, value) => { addItem(String(value)); return ''; }, 'Add an item: /vaelitem Bread'],
    ['vaelset', (args, value) => { const s = S(); const m = String(value).match(/(\d+)\s+(\d+)/); if (m) { s.kills = +m[1]; s.exp = +m[2]; save(); } return statusText(); }, 'Set kills and EXP manually: /vaelset 12 30'],
    ['vaelreset', () => { ctx().chatMetadata[EXT] = defaultState(); save(); toast('Vael state reset for this chat.'); return ''; }, 'Reset Vael state for this chat'],
  ];
  for (const [name, fn, help] of cmds) {
    try {
      if (c.SlashCommandParser && c.SlashCommand) {
        c.SlashCommandParser.addCommandObject(c.SlashCommand.fromProps({ name, callback: fn, helpString: help,
          unnamedArgumentList: c.SlashCommandArgument ? [c.SlashCommandArgument.fromProps({ description: 'value', typeList: ['string'], isRequired: false })] : [] }));
      } else if (c.registerSlashCommand) c.registerSlashCommand(name, fn, [], help, true, true);
    } catch (e) { console.warn(EXT, 'command', name, e); }
  }
}

(function init() {
  const c = ctx();
  buildHud(); refreshPrompt(); registerCommands();
  c.eventSource.on(c.event_types.MESSAGE_RECEIVED, id => setTimeout(() => scanMessage(id), 50));
  c.eventSource.on(c.event_types.CHAT_CHANGED, () => { refreshHud(); refreshPrompt(); });
  console.log(EXT, 'loaded');
})();
