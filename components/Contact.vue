<template>
  <section id="contact" class="contact">
    <div class="contact__card">
      <h2 class="contact__title">{{ $t('contact.heading1') }}</h2>
      <div class="contact__content">
        <div class="contact__text">
          <span>{{ $t('contact.content1') }}</span>
          <br />
          <span>discounts, sales, special offers and more.</span>
        </div>
        <form>
          <input type="text" placeholder="Enter your email" />
          <Icon :name="'mail'" />
        </form>
        <div class="contact__social">
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
      </div>
    </div>
    <div class="contact__card">
      <h2 class="contact__title">{{ $t('contact.heading2') }}</h2>
      <div class="contact__content">
        <div class="contact__info">
          <Icon :name="'map-pin'" :color="'#ffc139'" />
          <span>{{ $t('contact.location') }}</span>
        </div>

        <div class="contact__info">
          <a href="tel:0988-xxx-xxx">
            <Icon :name="'phone'" :color="'#ffc139'" />
            <strong>+1 (800) 312-2121</strong>
          </a>
        </div>

        <div class="contact__info">
          <Icon :name="'clock'" :color="'#ffc139'" />
          <div class="contact__infor-text">
            <span>{{ $t('contact.time1') }}</span>
            <br />
            <span>{{ $t('contact.time2') }}</span>
          </div>
        </div>

        <div class="contact__info">
          <a href="#">
            <Icon :name="'mail'" :color="'#ffc139'" />
            <strong>Send us an Email</strong>
          </a>
        </div>
      </div>
    </div>
    <div class="contact__card">
      <h2 class="contact__title">{{ $t('contact.heading3') }}</h2>
      <div class="contact__content">
        <div
          v-for="category in getCategories"
          :key="category.id"
          class="contact__ingredient"
        >
          <img :src="category.strCategoryThumb" :alt="category.strCategory" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Icon from '@/utils/icons.vue'
import { Categories } from '@/types/index'

@Component<Contact>({
  components: {
    Icon,
  },
})
export default class Contact extends Vue {
  @Prop({ type: Array, required: true }) categories!: Categories[]

  get getCategories() {
    return this.categories
  }
}
</script>
