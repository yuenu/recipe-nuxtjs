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
        <h2 class="characteristics__content-heading">
          {{ $t('characteristics.heading1-1') }}
        </h2>
        <h6 class="characteristics__content-secondary">
          {{ $t('characteristics.heading1-2') }}
        </h6>
      </div>
    </div>
    <div class="characteristics__center">
      <img src="@/assets/images/characteristics-center.png" />
      <div class="characteristics__content">
        <h2 class="characteristics__content-heading">
          {{ $t('characteristics.heading2-1') }}
        </h2>
        <h6 class="characteristics__content-secondary">
          {{ $t('characteristics.heading2-2') }}
        </h6>
        <h6 class="characteristics__content-tertiary">
          {{ $t('characteristics.heading2-3') }}
        </h6>
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
        <h2 class="characteristics__content-heading">
          {{ $t('characteristics.heading3-1') }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component<Characteristics>({})
export default class Characteristics extends Vue {}
</script>
