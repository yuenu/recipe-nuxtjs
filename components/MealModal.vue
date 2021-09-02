<template>
  <section class="modal">
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
        <div class="modal__info-content">{{}}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import Icon from '@/utils/icons.vue'
import { Meal } from '@/types/index'

type MealDetail = {
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

  data: MealDetail = {
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
  handleMealData(val: Meal[], _oldVal: Meal[]) {
    console.log('new:', val)
    const mealInfo = val[0]
    this.data.mealId = mealInfo.idMeal
    this.data.mealName = mealInfo.strMeal
    this.data.mealArea = mealInfo.strArea
    this.data.mealCategory = mealInfo.strCategory
    this.data.mealImgUrl = mealInfo.strMealThumb
    this.data.mealInstructions = mealInfo.strInstructions
    // for (let i = 1; i <= 20; i++) {
    //   if (mealInfo['strIngredient' + i]) {
    //     this.data.mealIngredients.push(
    //       `${mealInfo['strIngredient' + i]} -> ${mealInfo['strMeasure' + i]}`
    //     )
    //   }
    // }
  }

  close() {
    this.$emit('close')
  }
}
</script>
