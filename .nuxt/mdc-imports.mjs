import Highlight from '/Users/lethimyduyen/Documents/intern/web-emily/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: Highlight, options: {"src":"/Users/lethimyduyen/Documents/intern/web-emily/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs"} },
}

export const highlight = {"theme":"dracula"}