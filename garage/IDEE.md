# Idee: Pump & Dump '87: Garage

Entwurf aus dem ersten Gespräch, nichts davon ist gebaut. Felder mit *(provisional)* sind Vorschläge.

## In your words
mach das bitte ein 3d envirement in einem kleinen büro z.b. garage behalte den stile lass es low poly aber lass multiplyer und sec schreddern muss man physisch machen mit animation an computer gehen mit telefon längere dialoge sodass das überzeugen schwerer wird kunden von den konkurrenten klauen mitarbeiter einstellen partys schmeissen sodass deren moral hoch bleibt usw koksen sodass man längere schichten machen kann sonnst muss man zwischendurch pause machen

bau einfach, aber das ist die idee von meinem freund, mach das als zweite version mäßig, das man auch die auswählen kann

**Pitch:** Eine Doppelgarage in Queens, 1987: Ihr telefoniert zu zweit bis viert eine Schrott-Aktie hoch, stellt Leute ein, schmeißt Partys, tragt die Beweise zum Schredder und drückt den roten Knopf, bevor die SEC das Tor aufmacht. *(provisional)*

**Genre:** co-op office tycoon, top-down 3D *(provisional)*

**Controls:** WASD or arrows (touch: joystick) walk; E or the action button: use, hold E for hold actions; 1/2/3 answer on the phone; Esc hang up or close; M mute. *(provisional)*

**Question:** Trägt die Garage mit Koop, längeren Gesprächen und physischem Schreddern eine Runde von 8 Minuten?

**Hooks:** carrying red files through a party to the shredder while the SEC knocks; convincing a caller over three rounds; the coke shortcut with its crash. *(provisional)*

**Intent:** staged failure *(provisional)*

## Look and references
- Look: low-poly diorama of a two-car garage with the front wall cut away: concrete floor, walnut desks, beige computers, red phones, yellow legal pads, a pinned yellow-pad chart on the back wall with the felt-tip price line, a disco ball, an 80s couch, a red DUMP button. Same palette and type as the notepad version (pad yellow, ballpoint blue, marker black, tabloid red, walnut). People are blocky low-poly figures. UI panels look like the notepad version. Every figure drawn, no emoji. *(provisional)*
- References: the notepad version (dialog, tabloid, palette); the source Gemini file (walkable office, shredder, co-op). *(provisional)*
- View: 3D · Camera: angled top-down follow camera, about 50 degrees. *(provisional)*

## First minute
You stand in the garage with your crew. A prompt says "E: telephone" at a desk. You sit, the phone rings, a caller needs three rounds to buy. A lie closes faster and drops a red file on your desk. You carry it to the shredder and hold E while it chews. By the end of the minute you hire the first broker at the corkboard.

## Challenge
Files pile up from every lie, yours and your employees'. Each file leaks heat. At 60 heat the SEC knocks, an inspector walks in and counts files. At 100 it is a raid. Employees lose morale and quit unless you throw parties, which cost money and make noise. Your energy runs down; nap on the couch or use the coke tray, which crashes you later and knocks you out if overused. Friday 16:00 halts the stock.

## Core loop
- Calls (multi-round) earn cash and pump the price; lies make files.
- Cash buys employees, desks, parties, coke.
- Files go to the shredder by hand; inspections punish what is left.
- Hold the red button to dump; the tabloid shows the week.

## Goal & fail state
- Goal: the biggest dump payout.
- Fail: raid at 100 heat; halt on Friday 16:00 leaves cash only.

## Features
- [ ] Low-poly garage with desks, shredder, couch, coke tray, boombox and disco ball, corkboard, red dump button, competitor dumpster outside
- [ ] Walkable players with walk, sit, phone, carry, shred, dance, nap and collapse animations
- [ ] Multi-round phone dialogs with conviction and suspicion, five caller kinds including stolen competitor clients
- [ ] Red files from lies that must be carried to the shredder; inspections and raid
- [ ] Employees with morale who work, slack and quit; hiring and buying desks
- [ ] Parties that lift morale; energy with naps, coke boost, crash and blackout
- [ ] Online co-op for up to four via room code (PeerJS), host runs the world
- [ ] Tabloid end screen, German and English, selectable from the notepad version

## Avoid
- The film's names, characters, company and scenes; the "Rothschild hack" line and anything like it.
- Near-black with one neon accent; teal or green around hue 160 to 190.

## Out of scope
- A server, accounts or a global leaderboard: needs a server.
- Saving a run between sessions: change it after play.

## Build order
1. One week in the garage, solo and co-op: calls, files, shredder, employees, parties, energy, inspections, dump, tabloid.
