<template>
  <section class="meal__banner">
    <span class="meal__banner-text">
      {{ bannerText }}
    </span>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component<MealsHeader>({})
export default class MealsHeader extends Vue {
  bannerText = 'bannerText'
}
</script>
