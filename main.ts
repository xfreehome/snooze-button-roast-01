// Snooze Button Roast — make.fun entry
// Writes one line roasting an alarm clock that rings at 6 AM on a Saturday
// to /output/entry.txt (gate: UTF-8, 1–200 chars, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My alarm clock went off at 6 AM on a Saturday — the only thing in this house with a worse work-life balance than its unemployed owner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
