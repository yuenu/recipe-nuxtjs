import type { Context } from '@nuxt/types'
import type { Inject } from '@nuxt/types/app'
import { getModule } from 'vuex-module-decorators'
import AppModule from '@/store/app'

export interface StoreAppContextInterface {
  data: AppModule
}

declare module 'vue/types/vue' {
  // adds this.$storeModules inside Vue components
  interface Vue {
    $storeModules: StoreAppContextInterface
  }
}

export default (ctx: Context, inject: Inject): void => {
  const storeModulesClasses = {
    data: AppModule,
  }

  const storeModules = {} as StoreAppContextInterface
  const keys = Object.keys(storeModulesClasses) as Array<
    keyof typeof storeModulesClasses
  >

  keys.forEach((key: keyof typeof storeModulesClasses) => {
    storeModules[key] = getModule(storeModulesClasses[key], ctx.store)

    Object.setPrototypeOf(storeModules[key], {
      appContext: ctx,
    })
  })

  // inject doesn't inject in context but in context.app
  inject('storeModules', storeModules)
  // if there will be a need to access it directly, we can uncomment below
  // ctx.$storeModules = storeModules
}
