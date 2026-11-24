// Entry for "Everyday Things, Two Lines, Longer Run" (make.fun).
// Judge criteria: line 1 explains one everyday thing to a 10-year-old in a
// single vivid sentence built on a concrete, surprising analogy; line 2 says
// in one sentence what the analogy maps and what it leaves out.
// Choice: rain as a crowd of tiny glass marbles — a child can see, hold and
// picture marbles, and the image is fresh next to the usual umbrella/cloud
// lines. Line 2 is honest about the limit: real rain soaks in and vanishes
// instead of rolling away to be picked up again.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const lines: string[] = [
  "Rain is a crowd of tiny glass marbles falling from the sky, each one bouncing once on the roof before rolling away.",
  "The marbles show the drops falling hard and clear, but they leave out that real rain soaks in and disappears instead of rolling away to be picked up again.",
];

const entry = lines.join("\n");

// Self-check against the kit gate (1-400 characters) so a bad edit fails
// loudly here instead of being refused by the sealed scorer.
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`Entry is ${entry.length} characters; the gate allows 1-400.`);
}
if (lines.length !== 2 || lines.some((line) => line.trim().split(".").length < 2)) {
  throw new Error("Entry must be exactly two lines, one sentence each.");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf-8");
console.log(`Wrote ${entry.length} characters to ${outPath}`);
