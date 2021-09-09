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
  meals: CategoryMeals[] = []
  categories: Categories[] = []
  mealDetail: Meal[] = []
  searchTerm = ''
  collection: CategoryMeals[] = []
  // TODO: definded the Set type complete
  collectionSet = new Set()

  @Mutation
  STORE_CATEGORIES(data: Categories[]) {
    this.categories = data
  }

  @Mutation
  STORE_MEAL_DETAIL(data: Meal[]) {
    this.mealDetail = data
  }

  @Mutation
  STORE_MEALS(data: CategoryMeals[]) {
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
  ADD_MEAL_TO_COLLECTED(mealId: string) {
    if (this.collectionSet.has(mealId)) {
      // TODO: Use REMOVE MUTATION
      const mealOnCollectionIndex = this.collection.findIndex(
        (meal) => meal.idMeal === mealId
      )
      this.collection.splice(mealOnCollectionIndex, 1)
      this.collectionSet.delete(mealId)
    } else {
      this.collectionSet.add(mealId)
      const collectedMeal = this.meals.filter((meal) => meal.idMeal === mealId)
      this.collection.push({ ...collectedMeal[0], collected: true })
      console.log(this.collection)
    }
  }

  @Mutation
  REMOVE_MEAL_FROM_COLLECTION(mealId: string) {
    const mealOnCollectionIndex = this.collection.findIndex(
      (meal) => meal.idMeal === mealId
    )
    this.collection.splice(mealOnCollectionIndex, 1)
    this.collectionSet.delete(mealId)
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
    const handleMealsData = []
    for (const meal of meals) {
      handleMealsData.push({ ...meal, collected: false })
    }
    this.STORE_MEALS(handleMealsData)
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
