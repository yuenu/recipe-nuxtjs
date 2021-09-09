<template>
  <div class="pagination">
    <div
      :class="['pagination__link', 'prev', { disabled: !getPrevStatus }]"
      href="#"
      @click="$emit('prev')"
    >
      &lt;
    </div>
    <a
      v-for="page in pages"
      :key="page"
      :class="['pagination__link', { current: page === currentPage }]"
      @click="$emit('changePage', page)"
    >
      {{ page }}
    </a>
    <div
      :class="['pagination__link', 'next', { disabled: !getNextStatus }]"
      href="#"
      @click="$emit('next')"
    >
      &gt;
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'

@Component<Pagination>({})
export default class Pagination extends Vue {
  @Prop({ type: Number, default: 0 }) pages!: number
  @Prop({ type: Number, default: 1 }) currentPage!: number
  hasPrev = false
  hasNext = false

  // TODO: fix the pagination next / prev status control

  get getPrevStatus() {
    return this.hasPrev
  }

  get getNextStatus() {
    return this.hasNext
  }

  @Watch('currentPage', { immediate: true, deep: true })
  handleButtonsStatus(val: number, _oldVal: number) {
    if (this.pages > 1 && val !== this.pages) this.hasNext = true
    else this.hasNext = false

    if (this.pages > 1 && val !== 1) this.hasPrev = true
    else this.hasPrev = false

    if (val === 1 && this.pages > 1) {
      this.hasNext = true
      this.hasPrev = false
    }
    console.log('onPagination', this.pages)
    if (this.pages === 1) {
      this.hasPrev = false
      this.hasNext = false
    }
  }
}
</script>
