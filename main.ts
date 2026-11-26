import { mkdirSync, writeFileSync } from "node:fs";

const line = "I've heard four billion wishes, howls and 3am promises, and not one of you ever asked how I'm doing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
