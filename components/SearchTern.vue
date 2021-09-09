<template>
  <div class="search" @click.self="formClose">
    <div class="search__container">
      <form class="search__form" @submit.prevent="formSubmit">
        <div class="search__group">
          <input
            v-model.trim="searchInput"
            :class="['search__tern', { square: isFormActive }]"
            type="text"
            placeholder="search"
            autocapitalize="off"
          />
          <button
            :class="['search__icon', { close: isFormActive }]"
            type="reset"
            @click="formClose"
          ></button>
        </div>
      </form>
      <p style="color: red">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component<SearchTern>({
  mounted() {
    setTimeout(() => {
      this.formActive = true
    }, 200)
  },
})
export default class SearchTern extends Vue {
  @Prop({ default: false, type: Boolean }) searchFormActive!: boolean

  // TODO: Router query should be work
  searchInput = ''
  // For popup animation, have to use component data instead prop data
  formActive = false

  get isFormActive() {
    return this.formActive
  }

  errorMessage = ''
  checkInputIsEnglishLetter(input: string) {
    return /^[a-zA-Z\s]*$/.test(input)
  }

  formSubmit() {
    if (this.checkInputIsEnglishLetter(this.searchInput)) {
      this.$emit('searchSubmit', this.searchInput)
      this.searchInput = ''
      this.errorMessage = ''
      this.$router.push(this.localePath({ path: 'meals' }))
      this.formClose()
    } else {
      this.errorMessage = this.$i18n.t('error-message') as string
    }
  }

  formClose() {
    this.formActive = false
    this.$emit('formClose')
  }
}
</script>
