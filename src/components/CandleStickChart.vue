<template>
  <apexchart
    type="candlestick"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import VueApexCharts from "vue3-apexcharts";
import { Prop } from "vue-property-decorator";

@Options({
    components: {
        apexchart: VueApexCharts
    }
})
export default class CandleStickChart extends Vue {
    @Prop({ default: () => [] })
    private candles!: any[];

    private chartOptions = {
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: 'Bitcoin last prices',
            align: 'left'
        },
        xaxis: {
            type: 'time'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    }

    private get series() {
        return [{
            data: this.candles.slice()
        }]
    }
}
</script>

<style>
</style>