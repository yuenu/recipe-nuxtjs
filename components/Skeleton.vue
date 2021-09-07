<template>
  <figure class="card-image loading" :style="style"></figure>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Skeleton extends Vue {
  @Prop({ type: [String, Number], default: '100%' }) width!: string | number
  @Prop({ type: [String, Number], default: '100%' }) height!: string | number
  @Prop({ type: [String, Number], default: '100%' }) minHeight!: string | number

  isNumeric(val: any) {
    return /^\d+$/.test(val)
  }

  get _width() {
    return this.isNumeric(this.width) ? this.width + 'px' : this.width
  }

  get _height() {
    return this.isNumeric(this.height) ? this.height + 'px' : this.height
  }

  get _minHeight() {
    return this.isNumeric(this.minHeight)
      ? this.minHeight + 'px'
      : this.minHeight
  }

  get style() {
    return {
      width: this._width,
      height: this._height,
      minHeight: this._minHeight,
    }
  }
}
</script>

<style lang="scss" scoped>
.card-image {
  margin: 0;
  padding: 0;
  height: 200px;
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
  }
}

.loading {
  position: relative;
  background-color: #e2e2e2;

  &.card-image {
    border-radius: 0;
  }

  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: loading 1.5s infinite;
  }
}

@keyframes loading {
  100% {
    transform: translateX(100%);
  }
}

.card-image.image {
  max-width: 100%;
  height: auto;
}

.card-imag img {
  object-fit: cover;
}
</style>
