<template>
  <section class="map">
    <h1 class="map__heading">地圖資訊</h1>
    <div ref="mapEl" class="mapEl" style="height: 60vh; width: 100%"></div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator'
import { Loader } from '@googlemaps/js-api-loader'


const TaichungCityGovernment = { lat: 24.161796, lng: 120.646765 }
const googleMapsApiKey = process.env.GOOGLEMAAP_API_KEY || ''
const loader = new Loader({ apiKey: googleMapsApiKey, language: 'zh_TW' })

@Component<Map>({
  async mounted() {
    await loader.load()
    this.initMap()
  },
})
export default class Map extends Vue {
  @Ref() mapEl!: HTMLElement

  map!: google.maps.Map
  marker!: google.maps.Marker

  initMap() {
    this.map = new google.maps.Map(this.mapEl, {
      center: TaichungCityGovernment,
      zoom: 16,
    })

    const geocoder = new google.maps.Geocoder()

    geocoder.geocode(
      { address: 'Taichung City Government' },
      (result, status) => {
        if (status === 'OK' && result) {
          this.map.setCenter(result[0].geometry.location)
          this.marker = new google.maps.Marker({
            map: this.map,
            position: result[0].geometry.location,
          })
        } else {
          console.log(
            'Geocode was not successful for the following reason: ' + status
          )
        }
      }
    )
  }
}
</script>
