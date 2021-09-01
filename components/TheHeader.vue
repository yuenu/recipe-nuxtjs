<template>
  <header class="header">
    <div class="header__container">
      <div class="header__top">
        <div class="header__phone">
          <a class="header__phone__link" href="tel: 0988-XXX-XXX">
            <Icon
              class="header__phone-icon"
              :name="'phone'"
              :color="'#FFDC80'"
            />
            <span class="header__phone-text">0988-XXX-XXX</span>
          </a>
        </div>
        <div class="header__brand">
          <NuxtLink to="/" class="headerTop__brand--link">
            <img src="@/static/logo.png" alt="logo" />
          </NuxtLink>
        </div>
        <div class="header__address">
          <div class="header__address-icon">
            <Icon :name="'map-pin'" :color="'#FFDC80'" />
          </div>
          <span class="header__address-text">{{ $t('header.location') }}</span>
        </div>
      </div>
      <div class="header__bottom">
        <div class="header__lang">
          <nuxt-link class="header__lang-cn" :to="switchLocalePath('cn')"
            >簡</nuxt-link
          >
          <nuxt-link class="header__lang-tw" :to="switchLocalePath('tw')"
            >繁</nuxt-link
          >
          <nuxt-link class="header__lang-en" :to="switchLocalePath('en')"
            >EN</nuxt-link
          >
        </div>
        <nav ref="navEl" class="header__nav">
          <ul class="header__nav-list">
            <li>
              <NuxtLink to="/">{{ $t('navigation.home') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#about">{{ $t('navigation.about') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/meals">{{ $t('navigation.meals') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#contact">{{ $t('navigation.contact') }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="header__social">
          <a href="https://www.facebook.com/">
            <Icon :name="'facebook'" />
          </a>
          <a href="https://twitter.com/">
            <Icon :name="'twitter'" />
          </a>
          <a href="https://www.instagram.com/">
            <Icon :name="'instagram'" />
          </a>
        </div>
        <div class="header__control">
          <Icon :name="'search'" />
          <Icon :name="'heart'" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator'
import Icon from '@/utils/icons.vue'

@Component<Hero>({
  components: {
    Icon,
  },
  mounted() {
    window.addEventListener('scroll', () => {
      cancelAnimationFrame(this.requestAnimationFrameTimer)
      this.requestAnimationFrameTimer = requestAnimationFrame(
        this.toggleHeaderSticky
      )
    })
  },
})
export default class Hero extends Vue {
  @Ref() navEl!: HTMLElement

  requestAnimationFrameTimer = 0

  toggleHeaderSticky() {
    if (this.navEl) {
      if (window.pageYOffset > 70) {
        this.navEl.classList.add('sticky')
      } else {
        this.navEl.classList.remove('sticky')
      }
    }
  }
}
</script>
