<template>
  <section class="characteristics">
    <div class="characteristics__left">
      <img src="@/assets/images/characteristics-left.png" />
      <div class="characteristics__content">
        <img
          src="@/assets/images/favorite.png"
          alt="favorite-dress"
          class="characteristics__dress"
        />
        <h2 class="characteristics__content-heading">超多樣</h2>
        <h6 class="characteristics__content-secondary">超過三百多種食譜</h6>
      </div>
    </div>
    <div class="characteristics__center">
      <img src="@/assets/images/characteristics-center.png" />
      <div class="characteristics__content">
        <h2 class="characteristics__content-heading">簡單的</h2>
        <h6 class="characteristics__content-secondary">自己做料理</h6>
        <h6 class="characteristics__content-tertiary">找到你喜愛的料理</h6>
      </div>
    </div>
    <div class="characteristics__right">
      <img src="@/assets/images/characteristics-right.png" />
      <div class="characteristics__content">
        <img
          src="@/assets/images/health.png"
          alt="favorite-dress"
          class="characteristics__dress"
        />
        <h2 class="characteristics__content-heading">健康</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default class Characteristics extends Vue {}
</script>
