<template>
  <section class="meal__banner">
    <span class="meal__banner-text">
      {{ getSearchTerm }}
    </span>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component<MealsHeader>({})
export default class MealsHeader extends Vue {
  @Prop({ default: '', type: String }) searchTerm!: string

  get getSearchTerm() {
    return this.searchTerm
  }
}
</script>
