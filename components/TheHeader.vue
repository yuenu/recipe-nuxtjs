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
          <NuxtLink :to="localePath('/')" class="headerTop__brand--link">
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
      <div ref="navEl" class="header__wrapper">
        <div class="header__bottom">
          <div class="header__lang">
            <NuxtLink class="header__lang-cn" :to="switchLocalePath('cn')">
              簡
            </NuxtLink>
            <NuxtLink class="header__lang-tw" :to="switchLocalePath('tw')">
              繁
            </NuxtLink>
            <NuxtLink class="header__lang-en" :to="switchLocalePath('en')">
              EN
            </NuxtLink>
          </div>
          <nav class="header__nav">
            <ul class="header__nav-list">
              <li>
                <HomeMenu @getMealByCategory="getMealByCategory" />
              </li>
              <li>
                <NuxtLink :to="localePath('/#about')">{{
                  $t('navigation.about')
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/meals')">{{
                  $t('navigation.meals')
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/#contact')">{{
                  $t('navigation.contact')
                }}</NuxtLink>
              </li>
            </ul>
          </nav>
          <!-- <div class="header__social">
          <a href="https://www.facebook.com/">
            <Icon :name="'facebook'" />
          </a>
          <a href="https://twitter.com/">
            <Icon :name="'twitter'" />
          </a>
          <a href="https://www.instagram.com/">
            <Icon :name="'instagram'" />
          </a>
        </div> -->
          <div class="header__control">
            <Icon :name="'search'" @click.native="searchFormOpen" />
            <Collection
              :collection="getCollection"
              @deleteMealFromCollection="deleteMealFromCollection"
              @getMealDetail="onGetMealDetail"
            />
          </div>
        </div>
      </div>
    </div>

    <SearchTern
      v-if="searchFormActive"
      :search-form-active="searchFormActive"
      @formClose="searchFormClose"
      @searchSubmit="searchSubmit"
      @getMealDetail="getMealDetail"
    />

    <Modal
      v-if="isModalOpen"
      :meal-data="getMealDetail"
      @close="onModalClose"
    />
  </header>
</template>

<script lang="ts">
import { Vue, Component, Ref, getModule } from 'nuxt-property-decorator'
import Icon from '@/utils/icons.vue'
import SearchTern from '@/components/SearchTern.vue'
import Collection from '@/components/Collection.vue'
import Modal from '@/components/MealModal.vue'

import HomeMenu from '@/components/HomeMenu.vue'

import App from '@/store/app'

@Component<Hero>({
  components: {
    Icon,
    SearchTern,
    Collection,
    Modal,
    HomeMenu,
  },
  created() {
    this.$store.registerModule('myApp', App)
  },
  mounted() {
    window.addEventListener('scroll', () => {
      cancelAnimationFrame(this.requestAnimationFrameTimer)
      this.requestAnimationFrameTimer = requestAnimationFrame(
        this.toggleHeaderSticky
      )
    })
  },
  beforeDestroy() {
    this.$store.unregisterModule('myApp')
  },
})
export default class Hero extends Vue {
  @Ref() navEl!: HTMLElement

  isModalOpen = false

  get storeModule() {
    return getModule(App, this.$store)
  }

  get getCollection() {
    return this.storeModule.collection
  }

  get getMealDetail() {
    return this.storeModule.mealDetail
  }

  // Header scroll sticky animation
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

  // SEARCH CONTROAL
  searchFormActive = false

  searchFormClose() {
    this.searchFormActive = false
  }

  searchFormOpen() {
    this.searchFormActive = true
  }

  searchSubmit(searchInput: string) {
    this.storeModule.getMealByName(searchInput)
  }

  deleteMealFromCollection(mealId: string) {
    this.storeModule.REMOVE_MEAL_FROM_COLLECTION(mealId)
  }

  onGetMealDetail(mealId: string) {
    this.storeModule.getMealById(mealId)
    this.isModalOpen = true
    document.body.style.overflow = 'hidden'
  }

  onModalClose() {
    this.isModalOpen = false
    document.body.style.overflow = 'auto'
  }

  getMealByCategory(category: string) {
    this.storeModule.getMealsByCategory(category)
    this.$router.push(this.localePath({ path: 'meals' }))
  }
}
</script>
