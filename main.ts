// One Word for Your Wi-Fi — make.fun bounty
// Entry: a single word naming the Wi-Fi network.
// The program writes exactly that word plus a trailing newline
// to entry.txt inside the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Theoretical";

// Guard: the entry must be exactly one word (no spaces, no extra tokens).
if (!/^[A-Za-z]+$/.test(ENTRY)) {
  throw new Error("Entry must be exactly one word");
}

const outputDir = process.env.MAKEFUN_OUTPUT || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n");
