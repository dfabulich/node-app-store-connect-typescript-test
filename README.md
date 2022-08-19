This is a test of the [Node App Store Connect API](https://github.com/dfabulich/node-app-store-connect-api) with a TypeScript client.

Edit `issuerId`, `apiKey`, and `privateKey` in `test.ts`, and then `npm test` to run the test.

The test uses [`ts-node`](https://github.com/TypeStrong/ts-node) to launch `test.ts` directly.

In order to use ESM mode, (enabling top-level await) the repository includes a very basic `tsconfig.json` configured to target `ES2022`.

```json
{
    "compilerOptions": {"module": "ES2022", "target": "ES2022", "moduleResolution": "Node"}
}
```

And `package.json` includes `type: "module"` to enable ESM mode, and we pass the `--esm` parameter to `ts-node` to force it to generate ESM.
