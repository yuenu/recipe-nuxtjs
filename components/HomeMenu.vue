<template>
  <section class="menu">
    <NuxtLink :to="localePath('/')">{{ $t('navigation.home') }}</NuxtLink>
    
  </section>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component<HomeMenu>({})
export default class HomeMenu extends Vue {

}
</script>
