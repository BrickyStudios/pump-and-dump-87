// Entwurf (nicht verdrahtet): Tuning-Werte für die Garage. Frage: Trägt die Garage mit Koop, längeren Gesprächen und physischem Schreddern eine Runde von 8 Minuten?
// Every tuning value lives here, each with value, min, max and step. The game reads them live through tune.<name>.
window.CONFIG = (() => {
const r = (value, min, max, step) => ({ value, min, max, step });
const C = {
  seed: 1,
  volume: r(0.5, 0, 1, 0.05),

  // The week
  weekLength: r(480, 120, 1200, 30),   // s of play from Monday 09:30 to Friday 16:00
  startPrice: r(0.08, 0.01, 1, 0.01),  // $ per share
  shares: r(3000000, 100000, 10000000, 100000), // shares the garage holds and wants to dump
  startCash: r(9000, 0, 50000, 500),   // $
  startDesks: r(2, 1, 6, 1),
  maxDesks: r(6, 2, 6, 1),
  drift: r(0.0035, 0, 0.03, 0.0005),   // share of the price lost per second when nobody buys
  slippage: r(0.3, 0, 0.8, 0.05),      // lost by selling everything at once
  dumpHold: r(2, 0.5, 5, 0.1),         // s held at the red button

  // Your calls
  needGreedy: r(100, 40, 200, 5), needCautious: r(100, 40, 200, 5), needNarc: r(100, 40, 200, 5), needWhale: r(150, 40, 250, 5), needRival: r(160, 40, 250, 5),
  roundsBase: r(3, 1, 6, 1),           // rounds before a caller gives up
  roundsBig: r(4, 1, 6, 1),            // whales and stolen clients
  patience: r(9, 3, 20, 0.5),          // s per round
  gainBase: r(0.035, 0, 0.2, 0.005),   // price jump on a close
  gainPerLie: r(0.025, 0, 0.1, 0.005),
  gainWhale: r(2.2, 1, 5, 0.1), gainRival: r(2.6, 1, 5, 0.1),
  fee: r(1500, 0, 10000, 100),         // $ commission per close
  callGap: r(1.4, 0, 5, 0.1),          // s between calls while you sit

  // Heat (SEC interest, 0 to 100; a raid at 100)
  heatLie: r(4, 0, 20, 1),
  heatNarcLie: r(22, 0, 60, 1),
  heatDrip: r(0.03, 0, 1, 0.01),       // per second
  heatPerFile: r(0.06, 0, 0.5, 0.01),  // per second for every file not yet shredded
  shredHeat: r(5, 0, 30, 1),           // heat removed per shredded file
  shredHold: r(1.3, 0.3, 4, 0.1),      // s held at the shredder
  inspectAt: r(55, 20, 95, 1),         // heat at which the SEC knocks
  inspectEvery: r(70, 20, 300, 5),     // s between inspections while the heat stays up
  knockTime: r(12, 3, 30, 1),          // s from the knock to the inspector at the door
  inspectPerFile: r(9, 0, 30, 1),      // heat per file the inspector finds

  // Employees
  hireCost: r(4000, 0, 20000, 250),
  deskCost: r(2500, 0, 20000, 250),
  empWork: r(7, 2, 30, 0.5),           // s per call at full morale
  empGain: r(0.012, 0, 0.1, 0.002),
  empFee: r(900, 0, 5000, 50),
  empLieChance: r(0.45, 0, 1, 0.05),   // a close that leaves a file
  moraleDecay: r(0.45, 0, 3, 0.05),    // per second
  slackAt: r(35, 0, 100, 1),
  quitAt: r(8, 0, 50, 1),

  // Parties
  partyCost: r(5000, 0, 30000, 250),
  partyLength: r(16, 5, 60, 1),        // s
  partyMorale: r(5, 0, 20, 0.5),       // per second of party
  partyHeat: r(6, 0, 30, 1),

  // Energy
  energyDecay: r(0.32, 0, 3, 0.02),    // per second walking around
  energyCall: r(0.55, 0, 3, 0.05),     // per second on the phone
  napRate: r(14, 1, 50, 1),            // per second on the couch
  blackout: r(9, 2, 30, 1),            // s on the floor at zero energy
  cokeCost: r(800, 0, 10000, 50),
  cokeTime: r(40, 5, 120, 5),          // s of boost
  cokeSpeed: r(1.4, 1, 2.5, 0.05),
  cokeConv: r(1.2, 1, 2, 0.05),        // conviction multiplier while high
  cokeCrash: r(45, 0, 100, 5),         // energy lost when it wears off
  cokeHeat: r(2, 0, 20, 1),
  cokeOD: r(3, 2, 10, 1),              // uses within cokeWindow that knock you out
  cokeWindow: r(90, 10, 300, 5),
  walkSpeed: r(3.4, 1, 8, 0.1),        // m/s

  // Competitor
  rummageHold: r(2, 0.5, 6, 0.1),
  rummageLeads: r(3, 1, 10, 1),
  rummageCooldown: r(45, 5, 300, 5),
  rivalChance: r(0.6, 0, 1, 0.05),     // a call is a stolen client while leads remain
  narcFrom: r(40, 0, 300, 5),          // s before investigators call
  narcShare: r(0.18, 0, 0.5, 0.01),
  whaleShare: r(0.12, 0, 0.5, 0.01),
};
// Dialog: conviction and suspicion each reply adds, per caller kind
const D = {
  greedy: { h: [20, 0], s: [35, 0], l: [55, 0] },
  cautious: { h: [42, 0], s: [30, 8], l: [12, 45] },
  narc: { h: [34, 0], s: [30, 0], l: [50, 0] },
  whale: { h: [28, 0], s: [45, 5], l: [40, 22] },
  rival: { h: [30, 0], s: [42, 10], l: [50, 30] },
};
for (const k in D) for (const t in D[k]) { C[`conv_${k}_${t}`] = r(D[k][t][0], 0, 100, 1); C[`susp_${k}_${t}`] = r(D[k][t][1], 0, 100, 1); }
return C;
})();
