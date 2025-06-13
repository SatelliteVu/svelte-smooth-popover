import { readFile, writeFile } from "fs/promises";

var pkg = JSON.parse(await readFile("./package/package.json", { encoding: "utf8" }));

if (!pkg.name.startsWith("@satellitevu/")) {
    pkg.name = `@satellitevu/${pkg.name}`;
}
pkg.publishConfig = {
    "@satellitevu:registry": "https://npm.pkg.github.com"
}
pkg.repository.url = "https://github.com/SatelliteVu/svelte-popover"

await writeFile("./package/package.json", JSON.stringify(pkg, null, 2), { encoding: "utf8" });
