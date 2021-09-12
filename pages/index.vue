<template>
  <main class="main">
    <Modal
      v-if="isModalOpen"
      :meal-data="getMealDetail"
      @close="onModalClose"
    />
    <div class="main__container">
      <Hero />
      <Intro />
      <Feature @getMealDetail="onGetMealDetail" />
      <Characteristics />
      <ProductDisplay
        :categories="getCategories"
        :meals="getMeals"
        @getCategoryMeal="onCategoryMeals"
        @getMealDetail="onGetMealDetail"
      />
      <Contact :categories="getCategories" />
      <Map />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue, getModule } from 'nuxt-property-decorator'

import Hero from '@/components/Home/Hero.vue'
import Intro from '@/components/Home/Introduction.vue'
import Characteristics from '@/components/Home/Characteristics.vue'
import Feature from '@/components/Home/Feature.vue'
import ProductDisplay from '@/components/Home/ProductDisplay.vue'
import Contact from '@/components/Contact.vue'
import Map from '@/components/Map.vue'

import Modal from '@/components/MealModal.vue'
import customIcons from '@/utils/iconStore'
import App from '@/store/app'

@Component<IndexPage>({
  components: {
    Hero,
    Intro,
    Characteristics,
    Feature,
    ProductDisplay,
    Contact,
    Modal,
    Map
  },
  mounted() {
    this.setup()
  },
})
export default class IndexPage extends Vue {
  isModalOpen = false

  get storeModule() {
    return getModule(App, this.$store)
  }

  get getIcons() {
    return customIcons
  }

  get getCategories() {
    return this.storeModule.categories
  }

  get getMeals() {
    return this.storeModule.meals
  }

  get getMealDetail() {
    return this.storeModule.mealDetail
  }

  async setup() {
    await this.storeModule.getAllCategories()
    if (this.getMeals.length === 0)
      await this.storeModule.getMealsByCategory('beef')
  }

  onCategoryMeals(category: string) {
    this.storeModule.getMealsByCategory(category)
  }

  onGetMealDetail(mealId: string) {
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
