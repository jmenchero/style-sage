<template>
  <section class="section">
    <heat-time-map :chart-data="heatMap" />
  </section>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Coupons',
  layout: 'default',
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  async fetch() {
    await this.$store.dispatch('coupons/fetchCoupons')
  },
  computed: {
    coupons() {
      return this.$store.state.coupons.displayedCoupons
    },
    count() {
      return this.$store.getters['coupons/count']
    },
    heatMap() {
      const heatTimeMap = this.$store.getters['coupons/heatTimeMap']

      const datasets = _.map(heatTimeMap, (dates, type) => {
        const data = _.map(dates, (count, date) => {
          return {
            x: date,
            y: count,
          }
        })
        return {
          label: type,
          backgroundColor: this.randomColor(),
          data,
        }
      })
      return { datasets }
    },
  },
  methods: {
    randomColor() {
      return '#' + Math.floor(Math.random() * 600 + 300)
    },
  },
}
</script>

<style scoped>
.section {
  padding: 100px;
}
</style>
