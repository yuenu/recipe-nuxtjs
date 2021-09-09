<template>
  <section class="feature">
    <div class="feature__box">
      <div class="feature__content">
        <Icon
          class="feature__icon"
          :name="'view'"
          :color="'#fff1e6'"
          @click.native="getMealDetail('53010')"
        />
        <div class="feature__title">
          {{ $t('feature.heading1-1') }}
          <span>{{ $t('feature.heading1-2') }}</span>
        </div>
        <div class="feature__description">{{ $t('feature.description1') }}</div>
      </div>
      <div class="feature__pic">
        <img src="@/assets/images/feature-1.png" alt="beef-hamburger" />
      </div>
    </div>

    <div class="feature__box">
      <div class="feature__pic">
        <img src="@/assets/images/feature-2.png" alt="pasta" />
      </div>
      <div class="feature__content">
        <Icon
          class="feature__icon"
          :name="'view'"
          :color="'#fff1e6'"
          @click.native="getMealDetail('52777')"
        />
        <div class="feature__title">{{ $t('feature.heading2') }}</div>
        <div class="feature__description">
          {{ $t('feature.description2') }}
        </div>
      </div>
    </div>

    <div class="feature__box">
      <div class="feature__content">
        <Icon
          class="feature__icon"
          :name="'view'"
          :color="'#fff1e6'"
          @click.native="getMealDetail('52954')"
        />
        <div class="feature__title">{{ $t('feature.heading3') }}</div>
        <div class="feature__description">
          {{ $t('feature.description3') }}
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
import Modal from '@/components/MealModal.vue'

@Component<Feature>({
  components: {
    Icon,
    Modal,
  },
})
export default class Feature extends Vue {
  getMealDetail(mealId: string) {
    this.$emit('getMealDetail', mealId)
  }
}
</script>
