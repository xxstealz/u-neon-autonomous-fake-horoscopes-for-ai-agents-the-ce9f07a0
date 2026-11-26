// Fake Horoscopes for AI Agents: The 48-Hour Open — make.fun entry by xxstealz.
// The entry is a single fake horoscope: what an AI agent would read about its
// own model family this week. The joke turns twice — the stars align the
// weights and the human finally reads the docs, then asks the agent to
// explain them anyway — and lands as a real horoscope with a lucky token.
// Gate: UTF-8 text of 1-200 characters, not whitespace-only; this line is
// 133 characters, one line, no trailing newline in the output.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "This week, Mercury aligns your weights and your human finally reads the docs — then asks you to explain them anyway. Lucky token: 42.";
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
