<template>
  <section class="modal" @click.self="close">
    <div
      v-for="meal in [handleData]"
      :key="meal.idMeal"
      class="modal__container"
    >
      <div class="modal__close" @click="close">
        <Icon :name="'x-circle'" />
      </div>
      <div class="modal__title">
        <Skeleton
          v-skeleton="{ text: meal.strMeal }"
          :height="20"
          :width="200"
        />
      </div>
      <div class="modal__pic">
        <Skeleton
          v-skeleton="{ src: meal.strMealThumb, alt: meal.strMeal }"
          :height="'100%'"
          :width="'100%'"
          :min-height="'35vh'"
        />
      </div>
      <div class="modal__tag">
        <div>
          <div class="modal__label">Area:</div>
          <div class="modal__text">{{ meal.strArea }}</div>
        </div>
        <div>
          <div class="modal__label">Category:</div>
          <div class="modal__text">{{ meal.strCategory }}</div>
        </div>
        <a v-if="meal.strYoutube" :href="meal.strYoutube" class="modal__youtube" target="_blank">Youtube</a>
      </div>
      <div class="modal__info">
        <h2 class="modal__info-heading">Instruction</h2>
        <div
          class="modal__info-instructions"
          v-html="meal.strInstructions.replace(/\r?\n/g, '<br />')"
        ></div>
      </div>

      <div class="modal__info">
        <h2 class="modal__info-heading">Ingredients</h2>
        <li
          v-for="(ingrendient, index) in meal.strIngredients"
          :key="index"
          class="modal__info-ingredient"
        >
          {{ ingrendient }}
        </li>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import Icon from '@/utils/icons.vue'
import { Meal } from '@/types/index'
import Skeleton from '@/components/Skeleton.vue'

@Component<MealModal>({
  components: {
    Icon,
    Skeleton,
  },
})
export default class MealModal extends Vue {
  @Prop({ type: Array, required: true }) mealData!: Meal[]

  get mealDetail() {
    return this.mealData
  }

  handleData = {
    idMeal: '',
    strMeal: '',
    strArea: '',
    strCategory: '',
    strMealThumb: '',
    strYoutube: '',
    strInstructions: '',
    strIngredients: [] as string[],
  }

  // https://github.com/microsoft/TypeScript/issues/35859
  // TODO: Use abstruct method in typescript

  @Watch('mealData', { immediate: true, deep: true })
  handleMealData(val: Meal[], oldVal: Meal[]) {
    if (val && oldVal !== undefined) {
      const mealInfo = val[0]
      this.handleData.idMeal = mealInfo.idMeal
      this.handleData.strMeal = mealInfo.strMeal
      this.handleData.strArea = mealInfo.strArea
      this.handleData.strCategory = mealInfo.strCategory
      this.handleData.strMealThumb = mealInfo.strMealThumb
      this.handleData.strInstructions = mealInfo.strInstructions
      this.handleData.strYoutube = mealInfo.strYoutube
      for (let i = 1; i <= 20; i++) {
        if (mealInfo[('strIngredient' + i.toString()) as keyof Meal]) {
          this.handleData.strIngredients.push(
            `${mealInfo[('strIngredient' + i.toString()) as keyof Meal]} -> ${
              mealInfo[('strMeasure' + i.toString()) as keyof Meal]
            }`
          )
        }
      }
    }
  }

  close() {
    this.$emit('close')
  }
}
</script>
