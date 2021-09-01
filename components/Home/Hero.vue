<template>
  <section class="hero">
    <div class="hero__content">
      <h2 class="hero__heading">
        {{ $t('home.hero.heading') }}
      </h2>
      <h5 class="hero__secondary">
        {{ $t('home.hero.secondary') }}
      </h5>
      <button class="ctaBtn">
        {{ $t('home.ctaBtn') }}
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default class Hero extends Vue {}
</script>
