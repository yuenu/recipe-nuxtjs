<template>
  <main class="main">
    <div class="main__container">
      <Header />
      <div class="wrapper">
        <MealSidebar :categories="getCategories" />
        <MealList />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue, getModule } from 'nuxt-property-decorator'
import Header from '@/components/Meals/Header.vue'
import MealSidebar from '@/components/Meals/MealSidebar.vue'
import MealList from '@/components/Meals/MealList.vue'

import App from '@/store/app'

@Component<MealsPage>({
  components: {
    Header,
    MealSidebar,
    MealList,
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
  get storeModule() {
    return getModule(App, this.$store)
  }

  get getCategories() {
    return this.storeModule.categories
  }

  async setup() {
    await this.storeModule.getAllCategories()
  }
}
</script>
