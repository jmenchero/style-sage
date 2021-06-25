<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    options: {
      title: {
        text: 'Coupons Heat Time Map',
        display: true,
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'month',
            },
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>
