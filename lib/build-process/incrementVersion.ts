export {}

import packageJson from "~package.json"

console.log("Incrementing version number")

const currentVersion = packageJson.version;
let [major, minor, patch] = currentVersion.split(".");
let numPatch = parseInt(patch)
numPatch += 1
let versionNumber = `${major}.${minor}.${numPatch}`
let newPackageJson = packageJson
newPackageJson.version = versionNumber

console.log("Incremented version number to ", versionNumber)

await Bun.write("package.json", JSON.stringify(newPackageJson, null, 2))