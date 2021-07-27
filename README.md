# Vue SSR bundling for Worker environment

```bash
yarn
yarn build
yarn test
```

Error:

```bash
dist/main.js:11687
const { createComponentInstance, setCurrentRenderingInstance, setupComponent, renderComponentRoot, normalizeVNode } = vue.ssrUtils;
        ^

TypeError: Cannot destructure property 'createComponentInstance' of 'vue.ssrUtils' as it is null.
    at Object.<anonymous> (/Users/frandiox/workspace/vite-vue-bundle-issue/dist/main.js:11687:9)
```

Another issue is that the build requires Node's `stream` at the top level even though it's only used when calling `renderToStream` function. This makes worker environment crash unless the `stream` module is mocked.
