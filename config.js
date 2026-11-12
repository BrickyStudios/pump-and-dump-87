// Question: Macht Pushen-bis-kurz-vor-der-Razzia in 75 Sekunden süchtig genug, dass Leute ihre Zeitungsseite teilen?
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html).
window.CONFIG = (() => {
const r = (value, min, max, step) => ({ value, min, max, step });
return {
  seed: 1, // free play without ?seed=; the daily run seeds from the date
  volume: r(0.5, 0, 1, 0.05),

  // The day
  dayLength: r(75, 30, 180, 5),        // s of play from 09:30 to 16:00
  startPrice: r(0.12, 0.01, 1, 0.01),  // $ per share at the opening bell
  shares: r(2000000, 100000, 10000000, 100000), // shares you hold and want to dump

  // The price
  drift: r(0.011, 0, 0.05, 0.001),     // share of the price lost per second when nobody buys
  noise: r(0.018, 0, 0.08, 0.002),     // random walk per chart sample (4 per second)
  gainHonest: r(0.05, 0, 0.3, 0.01),   // price jump on a close, per reply kind
  gainSmooth: r(0.10, 0, 0.4, 0.01),
  gainLie: r(0.19, 0, 0.6, 0.01),
  whaleMult: r(2.4, 1, 5, 0.1),        // a whale's close moves the price this many times more
  comboStep: r(0.08, 0, 0.3, 0.01),    // extra gain per close in a row
  comboMax: r(6, 0, 15, 1),            // closes in a row that still add

  // The heat (SEC interest, 0 to 100; a raid at 100)
  heatSmooth: r(4, 0, 20, 1),
  heatLie: r(11, 0, 40, 1),
  heatFail: r(6, 0, 30, 1),            // a cautious caller you lied to complains
  heatNarcLie: r(34, 0, 80, 1),        // lying to an investigator
  heatNarcSmooth: r(9, 0, 40, 1),
  heatNarcHonest: r(-8, -30, 0, 1),
  heatDrip: r(0.22, 0, 2, 0.02),       // per second, just for being in this business
  heatWarn: r(70, 40, 95, 1),          // sirens start here

  // Odds that a caller buys, per caller kind and reply kind (0 to 1)
  oddsGreedyHonest: r(0.35, 0, 1, 0.05), oddsGreedySmooth: r(0.75, 0, 1, 0.05), oddsGreedyLie: r(1, 0, 1, 0.05),
  oddsCautiousHonest: r(1, 0, 1, 0.05), oddsCautiousSmooth: r(0.85, 0, 1, 0.05), oddsCautiousLie: r(0.3, 0, 1, 0.05),
  oddsWhaleHonest: r(0.5, 0, 1, 0.05), oddsWhaleSmooth: r(0.9, 0, 1, 0.05), oddsWhaleLie: r(0.8, 0, 1, 0.05),

  // Your hands
  shredTime: r(1.8, 0.5, 5, 0.1),      // s held for one bag of files
  shredGrow: r(0.5, 0, 2, 0.1),        // each bag takes this much longer than the last
  shredAmount: r(16, 5, 50, 1),        // heat removed per bag
  dumpHold: r(0.7, 0.2, 2, 0.1),       // s held to dump
  slippage: r(0.3, 0, 0.8, 0.05),      // share of the price lost by selling everything at once

  // The callers
  patienceStart: r(7, 3, 12, 0.5),     // s before a caller hangs up, at the opening bell
  patienceEnd: r(4.5, 2, 10, 0.5),     // ... and at the closing bell
  whalePatience: r(0.75, 0.3, 1, 0.05),// whales wait this share of that
  callGap: r(0.45, 0, 2, 0.05),        // s between calls
  narcFrom: r(14, 0, 60, 1),           // s into the day before investigators call
  whaleFrom: r(18, 0, 60, 1),
  narcShare: r(0.2, 0, 0.5, 0.01),     // share of calls that are investigators, late in the day
  whaleShare: r(0.12, 0, 0.4, 0.01),
};
})();
