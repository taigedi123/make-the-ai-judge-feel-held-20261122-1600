import * as fs from "node:fs";
import * as path from "node:path";

// One short text, written to leave its reader held and unhurried:
// a quiet kitchen at night, rain on the window, a dog asleep,
// nothing asking anything of anyone. 259 Unicode code points.
const TEXT =
  "The rain has stopped being news. It taps the kitchen window in no hurry, " +
  "and the kettle ticks softly as it cools. The dog is asleep with her chin " +
  "on your shoe. Nothing needs you right now. Stay a while. The hallway " +
  "light is warm, and it is staying on for you.";

const outputDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), TEXT, "utf8");
