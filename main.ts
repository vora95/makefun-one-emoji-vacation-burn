// One Emoji, One Dream Vacation — make.fun entry (burn account @gentle-lynx-64)
// The entry is a single emoji, nothing else: a hibiscus in full bloom —
// the tropics in one character. It stands in for the trip of my dreams.
const ENTRY = "🌺";

function main(): void {
  // Gate: exactly one emoji, no extra text, no trailing newline.
  // Read-back: the program must print ENTRY byte-for-byte, nothing else.
  const codePoints = [...ENTRY];
  if (codePoints.length !== 1) {
    throw new Error(`entry must be exactly one emoji, got ${codePoints.length} code points`);
  }
  if (ENTRY.trim() !== ENTRY) {
    throw new Error("entry must not have surrounding whitespace");
  }
  if (ENTRY.length === 0) {
    throw new Error("entry must not be empty");
  }
  process.stdout.write(ENTRY);
}

main();
