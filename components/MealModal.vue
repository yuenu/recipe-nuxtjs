<template>
  <section class="modal" @click.self="close">
    <div v-for="meal in mealDetail" :key="meal.idMeal" class="modal__container">
      <div class="modal__close" @click="close">
        <Icon :name="'x-circle'" />
      </div>
      <div class="modal__title">
        {{ meal.strMeal }}
      </div>
      <div class="modal__pic">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      </div>
      <div class="modal__tag">
        <div class="modal__label">Area:</div>
        <div class="modal__text">{{ meal.strArea }}</div>
        <div class="modal__label">Category:</div>
        <div class="modal__text">{{ meal.strCategory }}</div>
      </div>
      <div class="modal__info">
        <h2 class="modal__info-heading">Instruction</h2>
        <div
          class="modal__info-content"
          v-html="meal.strInstructions.replace(/\r?\n/g, '<br />')"
        ></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import Icon from '@/utils/icons.vue'
import { Meal } from '@/types/index'

type CustomMeal = {
  mealId: string
  mealName: string
  mealArea: string
  mealCategory: string
  mealImgUrl: string
  mealYoutubeLink: string
  mealInstructions: string
  mealIngredients: string[]
}

@Component<MealModal>({
  components: {
    Icon,
  },
})
export default class MealModal extends Vue {
  @Prop({ type: Array, required: true }) mealData!: Meal[]

  get mealDetail() {
    return this.mealData
  }

  handleData: CustomMeal = {
    mealId: '',
    mealName: '',
    mealArea: '',
    mealCategory: '',
    mealImgUrl: '',
    mealYoutubeLink: '',
    mealInstructions: '',
    mealIngredients: [],
  }

  @Watch('mealData', { immediate: true, deep: true })
  handleMealData(val: Meal[], oldVal: Meal[]) {
    if (val && oldVal !== undefined) {
      const mealInfo = val[0]
      this.handleData.mealId = mealInfo.idMeal
      this.handleData.mealName = mealInfo.strMeal
      this.handleData.mealArea = mealInfo.strArea
      this.handleData.mealCategory = mealInfo.strCategory
      this.handleData.mealImgUrl = mealInfo.strMealThumb
      this.handleData.mealInstructions = mealInfo.strInstructions
      for (let i = 1; i <= 20; i++) {
        if (mealInfo[('strIngredient' + i.toString()) as keyof Meal]) {
          this.handleData.mealIngredients.push(
            `${mealInfo[('strIngredient' + i.toString()) as keyof Meal]} -> ${
              mealInfo[('strMeasure' + i.toString()) as keyof Meal]
            }`
          )
        }
      }
    }
    console.log('handleData', this.handleData)
  }

  close() {
    this.$emit('close')
  }
}
</script>
