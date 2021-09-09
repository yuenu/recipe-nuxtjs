<template>
  <section class="collection">
    <Icon
      :class="['collection__icon', { active: isActive }]"
      :name="'heart'"
      @click.native="collectionStatus"
    />
    <div :class="['collection__container', { active: isActive }]">
      <div class="collection__heading">{{ $t('header.collection')}}</div>
      <div class="collection__content">
        <div class="collection__box" @click="getMealDetail">
          <div class="collection__box-img">
            <img src="@/assets/images/feature-3.png" alt="fake-data" />
          </div>
          <div class="collection__box-name">Fake name meals</div>
          <Icon
            class="collection__box-delete"
            :name="'delete'"
            :color="'red'"
            @click.native.stop="deleteMealFromCollection"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Icon from '@/utils/icons.vue'

@Component<Collection>({
  components: {
    Icon,
  },
})
export default class Collection extends Vue {
  isActive = false

  collectionStatus() {
    console.log('collection clicked')
    this.isActive = !this.isActive
  }

  getMealDetail() {
    console.log('get meal detail')
  }

  deleteMealFromCollection() {
    console.log('delete')
  }
}
</script>
