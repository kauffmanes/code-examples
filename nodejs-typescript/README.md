# Node.js and Typescript

- node 18

```
npm init
touch index.ts
```

1. Can't use ESM within node.js! Oh no.
1. Change the "type" in package.json to a module. Now it works!
1. `"build": "tsc"` -> change TS into JS
1. Use src dir for TS
1. Install types for node (@types/node)
1. create tsconfig for compile behavior
   - module - module system, commonjs good for require
   - we want the new one, nodenext, which is specifically for node apps using ESM
   - moduleResolution - how TS finds code that you import
   - flavor of code that we'll compile TO
   - sourceMap - maps compiled code back to typescript
   - outDir - where final JS is compiled to
   - include: says where to find the code
1. import relative .ts files, using .js extension: `Relative import paths need explicit file extensions in EcmaScript imports.` This is because we can still use commonjs, if we want to, using `.cts` extension.
