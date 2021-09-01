<template>
  <section id="about" class="intro">
    <div class="intro__pic">
      <img src="@/assets/images/intro.png" alt="intro-pizza" />
    </div>
    <div class="intro__content">
      <div class="intro__heading">{{ $t('home.intro.heading') }}</div>
      <div class="intro__rating">
        <Icon
          v-for="star in stars"
          :key="star.id"
          :name="'star'"
          :color="star.color"
        />
      </div>
      <div class="intro__description">
        {{ $t('home.intro.description') }}
      </div>
      <button class="ctaBtn text-dark">{{ $t('home.ctaBtn') }}</button>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Icon from '@/utils/icons.vue'

@Component<Introduction>({
  components: {
    Icon,
  },
})
export default class Introduction extends Vue {
  get stars() {
    return [
      {
        id: 1,
        color: '#FBC753',
      },
      {
        id: 2,
        color: '#FBC753',
      },
      {
        id: 3,
        color: '#FBC753',
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
    ]
  }
}
</script>
