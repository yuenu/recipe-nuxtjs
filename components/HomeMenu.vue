<template>
  <section class="menu">
    <a
      class="menu__link"
      @click="onBackToHome"
      @mouseover="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      {{ $t('navigation.home') }}
      <Icon :name="'down-arrow'" />
    </a>
    <div
      v-show="isActive"
      class="menu__container"
      @mouseleave="onMouseLeave"
      @mouseover="onMouseEnter"
    >
      <div class="menu__main">
        <img
          src="@/assets/images/menu/steak.png"
          alt="steak"
          @click="onGetMealsByName('steak')"
        />
        <img
          src="@/assets/images/menu/dessert.png"
          alt="dessert"
          @click="onGetMealByCategory('dessert')"
        />
        <img
          src="@/assets/images/menu/pizza.png"
          alt="pizza"
          @click="onGetMealsByName('pizza')"
        />

        <img
          src="@/assets/images/menu/pork.png"
          alt="pork"
          @click="onGetMealByCategory('pork')"
        />
        <img
          src="@/assets/images/menu/starter.png"
          alt="starter"
          @click="onGetMealByCategory('starter')"
        />
        <img
          src="@/assets/images/menu/breakfast.png"
          alt="breakfast"
          @click="onGetMealByCategory('breakfast')"
        />
      </div>
      <div class="menu__ad">
        <div class="menu__ad-card">
          <div class="menu__ad-text">
            <p>SPECIAL OFFER</p>
            <span>BUY 2 GET 3</span>
          </div>
          <img src="@/assets/images/coffee.png" alt="buy-me-a-coffee" />
          <button>Sponsor</button>
        </div>
        <div class="menu__ad-card">
          <div class="menu__ad-text">
            <span>GET 25% OFF</span>
            <p>ON YOUR ORDER</p>
          </div>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Icon from '@/utils/icons.vue'

@Component<HomeMenu>({
  components: {
    Icon,
  },
})
export default class HomeMenu extends Vue {
  timeoutID = 0
  isActive = false
  onMouseEnter() {
    this.isActive = true
    clearInterval(this.timeoutID)
  }

  onMouseLeave() {
    clearInterval(this.timeoutID)
    this.timeoutID = window.setTimeout(() => {
      this.isActive = false
    }, 800)
  }

  onGetMealByCategory(category: string) {
    this.isActive = !this.isActive
    this.$emit('getMealByCategory', category)
  }

  onGetMealsByName(name: string) {
    this.isActive = !this.isActive
    this.$emit('getMealsByName', name)
  }

  onBackToHome() {
    this.isActive = !this.isActive
    this.$router.push(this.localePath({ path: '/' }))
    window.scrollTo(0,0)
  }
}
</script>
