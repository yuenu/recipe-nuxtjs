<template>
  <main class="main">
    <Modal v-if="isModalOpen" :meal-data="getMealDetail" @close="onModalClose" />
    <div class="main__container">
      <Header />
      <div class="meal__wrapper">
        <MealSidebar
          :categories="getCategories"
          @getCategoryMeals="onCategoryMeals"
        />
        <MealList :meals="getMeals" @getMealDetail="onMealDetail" />
      </div>
      <Contact :categories="getCategories" />
    </div>
    <div class="test">
      <p v-if="$fetchState.pending">Fetching mountains...</p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div v-else>
        <h1>Nuxt Mountains</h1>
        <ul>
          <li v-for="mountain of mountains" :key="mountain.slug">
            {{ mountain.title }}
          </li>
        </ul>
        <button @click="$fetch">Refresh</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue, getModule } from 'nuxt-property-decorator'
import Header from '@/components/Meals/Header.vue'
import MealSidebar from '@/components/Meals/MealSidebar.vue'
import MealList from '@/components/Meals/MealsList.vue'
import Contact from '@/components/Contact.vue'
import Modal from '@/components/MealModal.vue'

import App from '@/store/app'

@Component<MealsPage>({
  components: {
    Header,
    MealSidebar,
    MealList,
    Contact,
    Modal,
  },
  created() {
    this.$store.registerModule('myApp', App)
  },
  mounted() {
    this.setup()
  },
  beforeDestroy() {
    this.$store.unregisterModule('myApp')
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
  
  async setup() {
    await this.storeModule.getAllCategories()
  }

  onCategoryMeals(category: string) {
    this.storeModule.getFilterByCategory(category)
  }

  // Modal Control
  onMealDetail(mealId: string) {
    this.storeModule.getMealById(mealId)
    this.isModalOpen = true
  }

  onModalClose() {
    this.isModalOpen = false
  }

  // nuxt fetch function test
  mountains = []
  async fetch() {
    this.mountains = await fetch('https://api.nuxtjs.dev/mountains').then(
      (res) => res.json()
    )
  }
}
</script>
