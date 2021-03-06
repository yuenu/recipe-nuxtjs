<template>
  <main class="main">
    <Modal
      v-if="isModalOpen"
      :meal-data="getMealDetail"
      @close="onModalClose"
    />
    <div class="main__container">
      <MealHeader :search-term="getSearchTerm" />
      <div class="meal__wrapper">
        <MealSidebar
          :categories="getCategories"
          @getCategoryMeals="onCategoryMeals"
        />
        <MealList
          :meals="getMeals"
          @getMealDetail="onMealDetail"
          @collectedMeal="onCollectedMeal"
        />
      </div>
      <Contact :categories="getCategories" @getMealsByCategory="onCategoryMeals" />
      <Map />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue, getModule } from 'nuxt-property-decorator'
import MealHeader from '@/components/Meals/MealHeader.vue'
import MealSidebar from '@/components/Meals/MealSidebar.vue'
import MealList from '@/components/Meals/MealsList.vue'
import Contact from '@/components/Contact.vue'
import Modal from '@/components/MealModal.vue'
import Map from '@/components/Map.vue'

import App from '@/store/app'

@Component<MealsPage>({
  components: {
    MealHeader,
    MealSidebar,
    MealList,
    Contact,
    Modal,
    Map
  },
  mounted() {
    this.setup()
  },
})
export default class MealsPage extends Vue {
  isModalOpen = false

  get storeModule() {
    return getModule(App, this.$store)
  }

  // TODO: use Inject and Provide to pass data
  get getCategories() {
    return this.storeModule.categories
  }

  get getMeals() {
    return this.storeModule.meals
  }

  get getMealDetail() {
    return this.storeModule.mealDetail
  }

  get getSearchTerm() {
    return this.storeModule.searchTerm
  }

  async setup() {
    await this.storeModule.getAllCategories()
  }

  onCollectedMeal(mealId: string) {
    this.storeModule.ADD_MEAL_TO_COLLECTED(mealId)
  }

  onCategoryMeals(category: string) {
    this.storeModule.getMealsByCategory(category)
  }

  // Modal Control
  onMealDetail(mealId: string) {
    this.storeModule.getMealById(mealId)
    this.isModalOpen = true
    document.body.style.overflow = 'hidden'
  }

  onModalClose() {
    this.isModalOpen = false
    document.body.style.overflow = 'auto'
  }
}
</script>
