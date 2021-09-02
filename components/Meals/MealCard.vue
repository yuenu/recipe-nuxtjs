<template>
  <div class="meal__list-container">
    <div v-for="meal in meals" :key="meal.idMeal" class="meal__card">
      <div class="meal__card-pic">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      </div>
      <div class="meal__card-content">
        <div class="meal__card-title">
          <div class="meal__card-name">
            {{ meal.strMeal }}
          </div>
        </div>
        <div class="meal__card-buttons">
          <button
            class="meal__card-detail"
            @click="$emit('getMealDetail', meal.idMeal)"
          >
            Recipe
          </button>
          <Icon class="meal__card-collect" :name="'heart'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { CategoryMeals } from '@/types'

import Icon from '@/utils/icons.vue'

@Component<MealCard>({
  components: {
    Icon,
  },
})
export default class MealCard extends Vue {
  @Prop({ type: Array }) meals!: CategoryMeals[]
}
</script>
