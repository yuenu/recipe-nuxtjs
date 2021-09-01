<template>
  <div v-if="isGetResource" ref="iconEl" class="icon" v-html="iconName" />
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop, Watch } from 'nuxt-property-decorator'

@Component<Icons>({
  mounted() {
    this.iconType = this.type ? this.type + '/' : ''
    try {
      this.iconName = require(`~/assets/icons/${this.iconType}${this.name}.svg`)
      this.isGetResource = true
    } catch (_e) {
      this.isGetResource = false
    }
  },
})
export default class Icons extends Vue {
  @Ref() iconEl!: HTMLDivElement

  iconType = ''
  @Prop({ type: String, required: true }) name!: string
  @Prop({ type: String, required: false }) color!: string
  @Prop({ type: String, required: false }) type!: string

  iconName = ''
  isGetResource = false

  @Watch('color')
  handleColor(_val: string, _oldVal: string) {
    if (this.isGetResource && this.iconEl && this.color) {
      const svgEl = this.iconEl.children[0] as HTMLOrSVGImageElement
      svgEl.style.fill = this.color
    }
  }
}

// export default defineComponent({
//   props: {
//     name: {
//       type: String,
//       required: true,
//     },
//     color: {
//       type: String,
//       required: false,
//     },
//   },
//   setup(props) {
//     const iconEl = ref<HTMLDivElement>()
//     const iconName = ref('')
//     const isGetResource = ref(false)

//     onMounted(() => {
//       try {
//         iconName.value = require(`@/assets/icons/${props.name}.svg?raw`)
//         isGetResource.value = true
//       } catch (_e) {
//         isGetResource.value = false
//       }
//     })

//     watchEffect(() => {
//       if (isGetResource.value && iconEl.value && props.color) {
//         const svgEl = iconEl.value.children[0] as HTMLOrSVGImageElement
//         svgEl.style.fill = props.color
//       }
//     })
//     return {
//       iconName,
//       isGetResource,
//       iconEl,
//     }
//   },
// })
</script>
