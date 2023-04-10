# Nodejs, Express, with TypeScript

tsc works great for TypeScript, but it's only good for JS files! What do we do with HTML?

Use something like webpack to perform transformations on all assets, or just copy the files over.

```
 "clean": "rm -rf ./dist",
"build": "npm run clean && tsc && npm run copy-files",
"copy-files": "cp -r ./src/public ./dist",
```
