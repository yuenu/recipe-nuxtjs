<template>
  <main class="main">
    <div class="main__container">
      <img :src="getIcons.phone" alt="">
      <Hero />
      <Intro />
      <Feature />
      <Characteristics />
      <Contact :categories="getCategories" />
    </div>
  </main>
</template>

<script lang="ts">
// import axios from 'axios'

import { Component, Vue, getModule } from 'nuxt-property-decorator'
import Hero from '@/components/Home/Hero.vue'
import Intro from '@/components/Home/Introduction.vue'
import Characteristics from '@/components/Home/Characteristics.vue'
import Feature from '@/components/Home/Feature.vue'
import Contact from '@/components/Contact.vue'
import customIcons from '~/utils/iconStore'
import App from '@/store/app'

@Component<IndexPage>({
  components: {
    Hero,
    Intro,
    Characteristics,
    Feature,
    Contact,
  },
  created() {
    this.$store.registerModule('myApp', App)
  },
  mounted() {
    this.setup()
    console.log(customIcons.phone)

  },
  beforeDestroy() {
    this.$store.unregisterModule('myApp')
  },
})
export default class IndexPage extends Vue {
  get getIcons () {
    return customIcons
  }

  get storeModule() {
    return getModule(App, this.$store)
  }

  get getCategories() {
    return this.storeModule.categories
  }

  async setup() {
    await this.storeModule.getAllCategories()
  }
}
//   setup() {
//     const categories = ref([])

//     // TODO: Handle error event
//     const { fetch } = useFetch(async () => {
//       const { data } = await axios.get(
//         'https://www.themealdb.com/api/json/v1/1/categories.php'
//       )
//       categories.value = data.categories
//     })
//     fetch()
//     return { categories }
//   },
// })
</script>
