<template>
  <section class="collection">
    <div class="collection__main" @click="collectionStatusControl">
      <Icon
        :class="['collection__icon', { active: isActive }]"
        :name="'heart'"
      />
      <div v-if="getCollection.length !== 0" class="collection__count">
        {{ getCollection.length }}
      </div>
    </div>
    <div :class="['collection__container', { active: isActive }]">
      <div class="collection__heading">
        {{ $t('header.collection') }}
        <span v-if="getCollection.length !== 0"
          >({{ getCollection.length }})</span
        >
      </div>
      <div class="collection__content">
        <div
          v-for="collection in getCollection"
          :key="collection.idMeal"
          class="collection__box"
          @click="getMealDetail(collection.idMeal)"
        >
          <div class="collection__box-img">
            <img :src="collection.strMealThumb" :alt="collection.strMeal" />
          </div>
          <div class="collection__box-name">{{ collection.strMeal }}</div>
          <Icon
            class="collection__box-delete"
            :name="'delete'"
            :color="'red'"
            @click.native.stop="deleteMealFromCollection(collection.idMeal)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Icon from '@/utils/icons.vue'
import { CategoryMeals } from '@/types/index'

@Component<Collection>({
  components: {
    Icon,
  },
})
export default class Collection extends Vue {
  @Prop({ type: Array }) collection!: CategoryMeals[]

  isActive = false

  get getCollection() {
    return this.collection
  }

  collectionStatusControl() {
    this.isActive = !this.isActive
  }

  getMealDetail(mealId: string) {
    this.$emit('getMealDetail', mealId)
  }

  deleteMealFromCollection(mealId: string) {
    this.$emit('deleteMealFromCollection', mealId)
  }
}
</script>
