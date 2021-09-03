import { Module, Action, Mutation, VuexModule } from 'vuex-module-decorators'
import {
  fetchAllCategories,
  fetchMealsById,
  fetchMealsByCategory,
  fetchMealsByName,
} from '@/utils/api'
import { Categories, Meal } from '@/types'

@Module({
  name: 'myApp',
  stateFactory: true,
  namespaced: true,
})
export default class App extends VuexModule {
  meals: Meal[] = []
  categories: Categories[] = []
  mealDetail: Meal[] = []

  @Mutation
  STORE_CATEGORIES(data: Categories[]) {
    this.categories = data
  }

  @Mutation
  STORE_MEAL_DETAIL(data: Meal[]) {
    this.mealDetail = data
  }

  @Mutation
  STORE_MEALS(data: Meal[]) {
    this.meals = data
  }

  @Action
  async getAllCategories() {
    if (this.categories.length === 0) {
      const { categories } = await fetchAllCategories()
      this.STORE_CATEGORIES(categories)
    }
  }

  @Action
  async getFilterByCategory(category: string) {
    const { meals } = await fetchMealsByCategory(category)
    this.STORE_MEALS(meals)
    console.log('category Meals:', meals)
  }

  @Action
  async getMealById(mealId: string) {
    const { meals } = await fetchMealsById(mealId)
    this.STORE_MEAL_DETAIL(meals)
    console.log('fetch meal by Id:', meals)
  }

  @Action
  async getMealByName(searchName: string) {
    const { meals } = await fetchMealsByName(searchName)
    this.STORE_MEALS(meals)
    console.log('fetch meal by name:', meals)
  }
}
