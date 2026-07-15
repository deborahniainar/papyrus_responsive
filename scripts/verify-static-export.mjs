import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const staticDir = join(outDir, "_next", "static");

if (!existsSync(outDir)) {
  throw new Error("Le dossier out/ n'a pas ete genere.");
}

if (!existsSync(staticDir)) {
  throw new Error("Le dossier out/_next/static est absent.");
}

// Selon la version de Next.js / Turbopack, le CSS peut se trouver dans
// out/_next/static/css/ ou out/_next/static/chunks/ (ou un autre sous-dossier).
// On cherche donc recursivement plutot que de figer un chemin.
const cssFiles = [];
const htmlFiles = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) walk(fullPath);
    else if (entry.endsWith(".css")) cssFiles.push(fullPath);
    else if (entry.endsWith(".html")) htmlFiles.push(fullPath);
  }
};
walk(outDir);

if (cssFiles.length === 0) {
  throw new Error("Aucune feuille de style CSS n'a ete generee dans out/_next/static.");
}

const missingCssReference = htmlFiles.filter((file) => {
  const html = readFileSync(file, "utf8");
  return !html.includes('rel="stylesheet" href="/demos/papyrus/_next/static/');
});

if (missingCssReference.length > 0) {
  throw new Error(`Certaines pages HTML ne referencent pas les CSS avec le bon basePath : ${missingCssReference.join(", ")}`);
}

console.log(`Export verifie : ${htmlFiles.length} pages HTML et ${cssFiles.length} fichiers CSS.`);
