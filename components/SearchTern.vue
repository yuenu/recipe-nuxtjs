<template>
  <div v-if="getFormActive" class="search" @click.self="formClose">
    <div class="search__container">
      <form class="search__form" @submit.prevent="submitForm">
      <div class="search__group">
        <input
          v-model.trim="searchInput"
          :class="['search__tern', { square: getFormActive }]"
          type="text"
          placeholder="search"
          autocapitalize="off"
        />
        <button
          :class="['search__icon', { close: getFormActive }]"
          type="reset"
          @click="formClose"
        ></button>
      </div>
    </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component<SearchTern>({})
export default class SearchTern extends Vue {
  @Prop({ default: false, type: Boolean }) searchFormActive!: boolean

  searchInput = ''

  get getFormActive() {
    return this.searchFormActive
  }

  formSubmit() {
    // form close
    this.$emit('searchSubmit')
    console.log('submit form:', this.searchInput)

    this.searchInput = ''
  }

  formClose() {
    this.$emit('formClose')
  }
}
</script>