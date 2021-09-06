<template>
  <section class="product">
    <h1 class="product__heading">Product display</h1>
    <div class="product__categories">
      <div
        v-for="category in getCategories"
        :key="category.idCategory"
        class="product__categories-box"
        @click="$emit('getCategoryMeal', category.strCategory)"
      >
        <div class="product__category-pic">
          <Icon :name="category.strCategory.toLowerCase()" :type="'category'" />
        </div>
        <div class="product__category-text">
          {{ category.strCategory }}
        </div>
      </div>
    </div>

    <div class="product__meals">
      <div v-for="meal in getMeals" :key="meal.idMeal" class="product__card">
        <div class="product__card-pic">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" />
        </div>
        <div class="product__card-content">
          <div class="product__card-title">
            <div class="product__card-name">
              {{ meal.strMeal }}
            </div>
          </div>

          <button
            class="product__card-detail"
            @click="$emit('getMealDetail', meal.idMeal)"
          >
            Recipe
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
// import { Swiper, SwiperSlide } from 'swiper/vue'
import { Categories, Meal } from '@/types/index'

import Icon from '@/utils/icons.vue'

@Component<ProductDisplay>({
  components: {
    Icon,
    // Swiper,
    // SwiperSlide,
  },
})
export default class ProductDisplay extends Vue {
  @Prop({ type: Array, required: true }) categories!: Categories[]
  @Prop({ type: Array, required: true }) meals!: Meal[]

  get getCategories() {
    return this.categories
  }

  get getMeals() {
    return this.meals
  }

  onSwiper(swiper: any) {
    console.log(swiper)
  }

  onSlideChange() {
    console.log('slide change')
  }
}
</script>
