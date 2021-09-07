<template>
  <section class="product">
    <h1 class="product__heading">Product display</h1>
    <div ref="swiperComponentRef" class="product__categories">
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

    <Swiper
      ref="swiperComponentRef"
      class="product__meals"
      :options="swiperComponentOption"
    >
      <SwiperSlide
        v-for="meal in getMeals"
        :key="meal.idMeal"
        class="product__card"
      >
        <div class="product__card-pic">
          <Skeleton 
            v-skeleton="{ src: meal.strMealThumb, alt: meal.strMeal }"
            :width="'100%'"
            :height="'100%'"
            :min-height="'30vh'"
          />
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
      </SwiperSlide>
      <div slot="pagination" class="swiper-pagination"></div>
    </Swiper>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from 'nuxt-property-decorator'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { Categories, Meal } from '@/types/index'
import Skeleton from '@/components/Skeleton.vue'

import Icon from '@/utils/icons.vue'

@Component<ProductDisplay>({
  components: {
    Icon,
    Swiper,
    SwiperSlide,
    Skeleton
  },
  mounted() {
    console.log(this.$nuxt)
  }
})
export default class ProductDisplay extends Vue {
  @Ref() swiperComponentRef!: HTMLElement

  @Prop({ type: Array, required: true }) categories!: Categories[]
  @Prop({ type: Array, required: true }) meals!: Meal[]

  swiperComponentOption  = {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

  get getCategories() {
    return this.categories
  }

  get getMeals() {
    return this.meals
  }
}
</script>
