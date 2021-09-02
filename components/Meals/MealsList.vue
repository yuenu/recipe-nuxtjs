<template>
  <section class="meal__list">
    <MealCard :meals="meals" @getMealDetail="getMealDetail" />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import {CategoryMeals} from '@/types'
import MealCard from '@/components/Meals/MealCard.vue'

@Component<MealsList>({
  components: {
    MealCard
  }
})
export default class MealsList extends Vue {
  @Prop({type: Array}) meals!: CategoryMeals[]

  getMealDetail(mealId: string) {
    this.$emit('getMealDetail', mealId)
  }
}
</script>
