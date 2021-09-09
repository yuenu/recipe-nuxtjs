import { Module, Action, Mutation, VuexModule } from 'vuex-module-decorators'
import {
  fetchAllCategories,
  fetchMealsById,
  fetchMealsByCategory,
  fetchMealsByName,
} from '@/utils/api'
import { Categories, Meal, CategoryMeals } from '@/types'

@Module({
  name: 'myApp',
  stateFactory: true,
  namespaced: true,
})
export default class App extends VuexModule {
  meals: Meal[] = []
  categories: Categories[] = []
  mealDetail: Meal[] = []
  searchTerm = ''
  collection: CategoryMeals[] = []

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

  @Mutation
  EMPTY_MEALS() {
    this.meals = []
  }

  @Mutation
  STORE_SEARCHTERM(term: string) {
    this.searchTerm = term
  }

  @Mutation
  ADD_MEAL_TO_COLLECTED(selectedMeal: CategoryMeals) {
    const mealInCollectedIndex = this.collection.findIndex((meal) => {
      return meal.idMeal === selectedMeal.idMeal
    })

    if (mealInCollectedIndex === -1) {
      console.log('not in collected, add to collection')
      this.collection.push(selectedMeal)
    } else {
      console.log('already in collection')
    }
  }

  @Mutation
  REMOVE_MEAL_FROM_COLLECTION(selectedMeal: CategoryMeals) {
    this.collection = this.collection.filter(
      (meal) => meal.idMeal !== selectedMeal.idMeal
    )
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
    this.STORE_SEARCHTERM(category)
    this.STORE_MEALS(meals)
  }

  @Action
  async getMealById(mealId: string) {
    const { meals } = await fetchMealsById(mealId)
    this.STORE_MEAL_DETAIL(meals)
  }

  @Action
  async getMealByName(searchName: string) {
    const { meals } = await fetchMealsByName(searchName)
    if (meals === null) {
      this.EMPTY_MEALS()
      this.STORE_SEARCHTERM('')
    } else {
      this.STORE_SEARCHTERM(searchName)
      this.STORE_MEALS(meals)
    }
  }
}
