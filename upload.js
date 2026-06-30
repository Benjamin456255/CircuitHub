const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const REPO = "Benjamin456255/CircuitHub";
const BASE = __dirname;
const EXCLUDE = [".git", "node_modules"];

function walk(dir, fileList = []) {
  for (const entry of fs.readdirSync(dir)) {
    if (EXCLUDE.includes(entry)) continue;
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      walk(full, fileList);
    } else {
      fileList.push(full);
    }
  }
  return fileList;
}

const files = walk(BASE).filter(f => !f.includes("\\.git\\"));
console.log(`Found ${files.length} files to upload\n`);

for (const filePath of files) {
  const relPath = path.relative(BASE, filePath).replace(/\\/g, "/");
  const content = fs.readFileSync(filePath);
  const b64 = content.toString("base64");

  try {
    execSync(`gh api repos/${REPO}/contents/${relPath} --jq .sha`, { stdio: "pipe" });
    console.log(`  SKIP (exists): ${relPath}`);
  } catch {
    // File doesn't exist, create it
    const payload = JSON.stringify({
      message: `Add ${relPath}`,
      content: b64,
    });

    try {
      execSync(`gh api repos/${REPO}/contents/${relPath} -X PUT -f message="Add ${relPath}" -f content="${b64}"`, {
        stdio: "pipe",
        timeout: 15000,
      });
      console.log(`  OK: ${relPath}`);
    } catch (e) {
      console.error(`  FAIL: ${relPath} — ${e.message}`);
    }
  }
}

console.log("\nDone. Repo: https://github.com/" + REPO);
