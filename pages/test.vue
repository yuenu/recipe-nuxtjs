<template>
  <section class="test-page">
    <div class="container">
      <section class="card">
        <figure v-skeleton class="card-image loading"></figure>
        <div class="card-detail">
          <h3 class="card-title loading"></h3>
          <p class="card-description loading"></p>
        </div>
      </section>
    </div>
    <Skeleton v-skeleton="{ text: 'apple' }" :height="10" :width="100" />
    <br />
    <Skeleton
      v-skeleton="{ src: imgSrc, alt: 'custom-image' }"
      :height="200"
      :width="300"
    />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Skeleton from '@/components/Skeleton.vue'

@Component<TestPage>({
  components: {
    Skeleton,
  },
})
export default class TestPage extends Vue {
  imgSrc =
  'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80'
}
</script>

<style lang="scss" scoped>
$border-color: #dae1e7;
$background-color: #f4f4f4;
$text-color: #333;
.container {
  margin: 2rem auto;
  max-width: 800px;
  display: flex;
  justify-content: center;
}

.card {
  overflow: hidden;
  background: white;
  border-radius: 0.25rem;
  max-width: 380px;
  width: 380px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.05),
    0 5px 15px 0 rgba(0, 0, 0, 0.05);
  transition: ease box-shadow 0.3s;
  &:hover {
    box-shadow: 0 15px 60px 0 rgba(0, 0, 0, 0.08),
      0 5px 25px 0 rgba(0, 0, 0, 0.08);
  }
}

.card-detail {
  padding: 0.5rem 1rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: none;
    line-height: 0.09;
  }

  p {
    line-height: 1.3rem;
  }
}

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

.card-title.loading {
  height: 1.8rem;
}

.card-image.image {
  max-width: 100%;
  height: auto;
}

.card-description.loading {
  height: 80px;
}
</style>
