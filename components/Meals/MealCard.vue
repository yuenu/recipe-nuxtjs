<template>
  <div class="meal__list-container">
    <div v-for="meal in meals" :key="meal.idMeal" class="meal__card">
      <div class="meal__card-pic">
        <Skeleton
          v-skeleton="{ src: meal.strMealThumb, alt: meal.strMeal }"
          :height="'100%'"
          :width="'100%'"
          :min-height="'28vh'"
        />
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
            {{ $t('recipe') }}
          </button>
          <Icon
            :class="['meal__card-collect', { active: meal.collected }]"
            :name="'heart'"
            @click.native="$emit('collectedMeal', meal.idMeal)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { CategoryMeals } from '@/types'
import Skeleton from '@/components/Skeleton.vue'

import Icon from '@/utils/icons.vue'

@Component<MealCard>({
  components: {
    Icon,
    Skeleton,
  },
})
export default class MealCard extends Vue {
  @Prop({ type: Array }) meals!: CategoryMeals[]
}
</script>
