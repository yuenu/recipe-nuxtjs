<template>
  <main class="main">
    <div class="main__container">
      <Hero />
      <Intro />
      <Feature />
      <Characteristics />
      <ProductDisplay
        :categories="getCategories"
        :meals="getMeals"
        @getCategoryMeal="onCategoryMeals"
      />
      <Contact :categories="getCategories" />
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
export default class IndexPage extends Vue {
  get getIcons() {
    return customIcons
  }

  get storeModule() {
    return getModule(App, this.$store)
  }

  get getCategories() {
    return this.storeModule.categories
  }

  get getMeals() {
    return this.storeModule.meals
  }

  async setup() {
    await this.storeModule.getAllCategories()
  }

  onCategoryMeals(category: string) {
    this.storeModule.getFilterByCategory(category)
  }
}
</script>
