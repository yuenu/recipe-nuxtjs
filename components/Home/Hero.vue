<template>
  <section class="hero">
    <div class="hero__content">
      <h2 class="hero__heading">
        {{ $t('home.hero.heading') }}
      </h2>
      <h5 class="hero__secondary">
        {{ $t('home.hero.secondary') }}
      </h5>
      <NuxtLink :to="localePath('/#product')" class="ctaBtn">
        {{ $t('home.ctaBtn') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component<Hero>({})
export default class Hero extends Vue {}
</script>
