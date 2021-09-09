<template>
  <div ref="iconEl" class="icon"></div>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop } from 'nuxt-property-decorator'

@Component<Icons>({
  mounted() {
    this.iconType = this.type ? this.type + '/' : ''
    try {
      this.iconData = require(`~/assets/icons/${this.iconType}${this.name}.svg?raw`)
    } catch (_e) {
      this.iconData = require('@/assets/icons/error-404.svg?raw')
    }
    this.iconEl.innerHTML = this.iconData

    if (this.color) {
      const svgEl = this.iconEl.children[0] as HTMLOrSVGImageElement
      svgEl.style.fill = this.color
    }
  },
})
export default class Icons extends Vue {
  @Ref() iconEl!: HTMLElement
  @Prop({ type: String, required: true }) name!: string
  @Prop({ type: String, required: false }) color!: string
  @Prop({ type: String, required: false }) type!: string

  iconType = ''
  iconData = ''
}
</script>
