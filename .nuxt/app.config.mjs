
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/lethimyduyen/Documents/intern/web-emily/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {},
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ],
    "strategy": "merge"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/lethimyduyen/Documents/intern/web-emily/app.config.ts"

export default /* #__PURE__ */ defuFn(cfg0, inlineConfig)
