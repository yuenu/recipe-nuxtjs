<template>
  <section class="sidebar">
    <div
      v-for="category in getCategories"
      :key="category.id"
      class="sidebar__box"
      @click="$emit('getCategoryMeals', category.strCategory)"
    >
      <div class="sidebar__pic-left">
        <Icon
          :name="
            category.strCategory[0].toLowerCase() +
            category.strCategory.slice(1)
          "
          :type="'category'"
        />
      </div>
      <span class="sidebar__name">{{
        $t(`category.${category.strCategory.toLowerCase()}`)
      }}</span>
      <div class="sidebar__pic-right">
        <img
          :src="category.strCategoryThumb"
          :alt="`${category.strCategory}-Thumb`"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Icon from '@/utils/icons.vue'

import type { Categories } from '@/types'

@Component<MealSidebar>({
  components: {
    Icon,
  },
})
export default class MealSidebar extends Vue {
  @Prop({ type: Array, required: true }) categories!: Categories[]

  get getCategories() {
    return this.categories
  }
}
</script>
