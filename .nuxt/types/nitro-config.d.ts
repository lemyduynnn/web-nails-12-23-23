// Generated by nitro

// App Config
import type { Defu } from 'defu'

import type { default as appConfig0 } from "/Users/lethimyduyen/Documents/intern/webb/web-nails-12-23-23/app.config";

type UserAppConfig = Defu<{}, [typeof appConfig0]>

declare module 'nitropack' {
  interface AppConfig extends UserAppConfig {}
}
    
export {}