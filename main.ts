// Make the AI Judge Laugh: Office Jokes entry: one-line joke about office life.
// Writes the line to /output/entry.txt (1-199 chars, UTF-8, deterministic).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Our standup is fifteen minutes because anything longer would force someone to admit nobody knows what the project does.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
