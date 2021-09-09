<template>
  <section id="mealResult" class="meal__list">
    <div v-if="meals.length === 0" class="meal__list-el">
      <img src="@/assets/images/no_result.gif" alt="no-result" />
    </div>
    <MealCard :meals="handlePageDisplay" @getMealDetail="getMealDetail" />
    <Pagination
      :pages="pages"
      :current-page="currentPage"
      @next="onNextPage"
      @prev="onPrevPage"
      @changePage="onChnageToThisPage"
    />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import { CategoryMeals } from '@/types'
import MealCard from '@/components/Meals/MealCard.vue'
import Pagination from '@/components/Meals/Pagination.vue'

@Component<MealsList>({
  components: {
    MealCard,
    Pagination,
  },
})
export default class MealsList extends Vue {
  @Prop({ type: Array }) meals!: CategoryMeals[]

  getMealDetail(mealId: string) {
    this.$emit('getMealDetail', mealId)
  }

  // Pagination control
  onePageDisplayMealCount = 9
  currentPage = 1
  
  get getMeals() {
    return this.meals
  }
  
  get pages() {
    return this.getMeals
      ? Math.ceil(this.getMeals.length / this.onePageDisplayMealCount)
      : 0
  }

  onNextPage() {
    this.currentPage =
      this.currentPage === this.pages ? this.currentPage : this.currentPage + 1
  }

  onPrevPage() {
    this.currentPage = this.currentPage === 1 ? 1 : this.currentPage - 1
  }

  onChnageToThisPage(clickedPage: number) {
    this.currentPage = clickedPage
  }

  get handlePageDisplay() {
    return this.meals.filter((_, index) => {
      if (this.currentPage === 1)
        return index < this.onePageDisplayMealCount * this.currentPage
      else
        return (
          index >= this.onePageDisplayMealCount * (this.currentPage - 1) &&
          index < this.onePageDisplayMealCount * this.currentPage
        )
    })
  }

  @Watch('meals', { immediate: true, deep: true })
  watchIfchangeSearch(val: CategoryMeals[], _oldVal: CategoryMeals[]) {
    // init the current page
    if (val) this.currentPage = 1
  }
}
</script>
