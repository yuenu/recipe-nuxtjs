import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AppModule from '@/store/app'

let appModule: AppModule

function initialiseStores(store: Store<any>): void {
  appModule = getModule(AppModule, store)
}

export { initialiseStores, appModule }
