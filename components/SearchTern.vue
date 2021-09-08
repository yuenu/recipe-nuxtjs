<template>
  <div class="search">
    <form class="search__form" @submit.prevent="submitForm">
      <div class="search__group">
        <input
          v-model.trim="searchInput"
          :class="['search__tern', { square: inputActive }]"
          type="text"
          :placeholder="t('search')"
          autocapitalize="off"
        />
        <button
          :class="['search__icon', { close: inputActive }]"
          type="reset"
          @click="formToggle"
        ></button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component<SearchTern>({})
export default class SearchTern extends Vue {}
</script>

