<template>
  <section class="feature">
    <div class="feature__box">
      <Icon class="feature__icon" :name="'view'" :color="'#fff1e6'" />
      <div class="feature__content">
        <div class="feature__title">BEEF CLASSIC <span>BURGERS</span></div>
        <div class="feature__description">
          Try this delicious burger containing of two fried parts of a
          whole-grain bun, a juicy piece of beef, cheese and lettuce
        </div>
      </div>
      <div class="feature__pic">
        <img src="@/assets/images/feature-1.png" alt="beef-hamburger" />
      </div>
    </div>

    <div class="feature__box">
      <Icon class="feature__icon" :name="'view'" :color="'#fff1e6'" />
      <div class="feature__pic">
        <img src="@/assets/images/feature-2.png" alt="pasta" />
      </div>
      <div class="feature__content">
        <div class="feature__title">THE BEST PASTA</div>
        <div class="feature__description">
          Our pasta with seafood is mixed perfectly with a glass of white wine
        </div>
      </div>
    </div>

    <div class="feature__box">
      <Icon class="feature__icon" :name="'view'" :color="'#fff1e6'" />
      <div class="feature__content">
        <div class="feature__title">SEASON SOUP</div>
        <div class="feature__description">
          We offer you a special dish – our season soup containing season
          vegetables
        </div>
      </div>
      <div class="feature__pic">
        <img src="@/assets/images/feature-3.png" alt="season-soup" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Icon from '@/utils/icons.vue'

@Component<Feature>({
  components: {
    Icon,
  },
})
export default class Feature extends Vue {}
</script>
