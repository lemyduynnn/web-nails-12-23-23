// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.7.4_eslint@8.51.0_sass@1.69.2_typescript@5.2.2/node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_mdc/highlight': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+mdc@0.2.2/node_modules/@nuxtjs/mdc/dist/runtime/shiki/event-handler').default>>>>
    }
    '/api/_content/query/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.8.5_vue@3.3.4/node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.8.5_vue@3.3.4/node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.8.5_vue@3.3.4/node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/cache.1703843155941.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.8.5_vue@3.3.4/node_modules/@nuxt/content/dist/runtime/server/api/cache').default>>>>
    }
    '/api/_content/navigation/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.8.5_vue@3.3.4/node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.8.5_vue@3.3.4/node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.8.5_vue@3.3.4/node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
  }
}
export {}