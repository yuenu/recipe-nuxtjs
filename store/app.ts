import { Module, Action, Mutation, VuexModule } from 'vuex-module-decorators'
import { fetchAllCategories } from '@/utils/api'
import { Categories, Meal } from '@/types'

@Module({
  name: 'myApp',
  stateFactory: true,
  namespaced: true,
})
export default class App extends VuexModule {
  meals: Meal[] = []
  categories: Categories[] = []

  @Mutation
  STORE_MEALS(data: Categories[]) {
    this.categories = data
  }

  @Action
  async getAllCategories() {
    if (this.categories.length === 0) {
      const { categories } = await fetchAllCategories()
      this.STORE_MEALS(categories)
    }
  }
  // get getCounter() {
  //   return this.counter
  // }

  // @Mutation
  // INCREMENT_COUNTER() {
  //   this.counter++
  // }

  // @Mutation
  // DECR_COUNTER() {
  //   this.counter--
  // }

  // @Action
  // increment() {
  //   this.context.commit('INCREMENT_COUNTER')
  // }

  // @Action
  // decr() {
  //   this.context.commit('DECR_COUNTER')
  // }
}
