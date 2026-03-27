# playwright-crx-wxt

Minimal example of a Chrome extension that uses Playwright CRX in a wxt (Vite 8) project

## Build bug

executing `npm run dev` will fail with the following error:

```
> wxt-starter@0.0.0 dev
> wxt

                                                                                                                                                10:39:25
WXT 0.20.20
✔ Started dev server @ http://localhost:3001                                                                                                   10:39:25
ℹ Pre-rendering chrome-mv3 for development with Vite 8.0.3                                                                                     10:39:25
✔ Built extension in 170 ms                                                                                                                    10:39:25
  ├─ .output/chrome-mv3-dev/manifest.json               1.04 kB 
  ├─ .output/chrome-mv3-dev/popup.html                  636 B   
  ├─ .output/chrome-mv3-dev/background.js               19.43 kB
  ├─ .output/chrome-mv3-dev/chunks/popup-BtFYepOI.js    7.84 kB 
  ├─ .output/chrome-mv3-dev/content-scripts/content.js  28.41 kB
  ├─ .output/chrome-mv3-dev/icon/128.png                3.07 kB 
  ├─ .output/chrome-mv3-dev/icon/16.png                 559 B   
  ├─ .output/chrome-mv3-dev/icon/32.png                 916 B   
  ├─ .output/chrome-mv3-dev/icon/48.png                 1.33 kB 
  ├─ .output/chrome-mv3-dev/icon/96.png                 2.37 kB 
  └─ .output/chrome-mv3-dev/wxt.svg                     1.07 kB 
Σ Total size: 66.68 kB                                                   
file:///home/luiz/repositories/firebase-crx-wxt/node_modules/rolldown/dist/shared/error-BLhcSyeg.mjs:48
        const wrapper = new Error(summary);
                        ^

Error: Error during dependency optimization:

Build failed with 2 errors:

[UNRESOLVED_IMPORT] Error: Could not resolve '../playwright' in node_modules/playwright-crx/lib/index-DedCW3aV.mjs
        ╭─[ node_modules/playwright-crx/lib/index-DedCW3aV.mjs:111450:40 ]
        │
 111450 │     const recorderPlaywright = require("../playwright").createPlaywright({ sdkLanguage: "javascript", isInternalPlaywright: true });
        │                                        ───────┬───────  
        │                                               ╰───────── Module not found.
        │ 
        │ Help: 'node_modules/playwright-crx/lib/index-DedCW3aV.mjs' is imported by the following path:
        │         - node_modules/playwright-crx/lib/index-DedCW3aV.mjs
        │         - node_modules/playwright-crx/lib/index.mjs
────────╯

[UNRESOLVED_IMPORT] Error: Could not resolve './bidiOverCdp' in node_modules/playwright-crx/lib/index-DedCW3aV.mjs
        ╭─[ node_modules/playwright-crx/lib/index-DedCW3aV.mjs:124837:41 ]
        │
 124837 │     const bidiTransport = await require("./bidiOverCdp").connectBidiOverCdp(transport);
        │                                         ───────┬───────  
        │                                                ╰───────── Module not found.
        │ 
        │ Help: 'node_modules/playwright-crx/lib/index-DedCW3aV.mjs' is imported by the following path:
        │         - node_modules/playwright-crx/lib/index-DedCW3aV.mjs
        │         - node_modules/playwright-crx/lib/index.mjs
────────╯

    at aggregateBindingErrorsIntoJsError (file:///home/luiz/repositories/firebase-crx-wxt/node_modules/rolldown/dist/shared/error-BLhcSyeg.mjs:48:18)
    at unwrapBindingResult (file:///home/luiz/repositories/firebase-crx-wxt/node_modules/rolldown/dist/shared/error-BLhcSyeg.mjs:18:128)
    at RolldownBuild.#build (file:///home/luiz/repositories/firebase-crx-wxt/node_modules/rolldown/dist/shared/rolldown-build-CPrIX9V6.mjs:3313:34)
    at Object.build (file:///home/luiz/repositories/firebase-crx-wxt/node_modules/vite/dist/node/chunks/node.js:31470:18) {
  errors: [Getter/Setter]
}

Node.js v24.12.0
```
