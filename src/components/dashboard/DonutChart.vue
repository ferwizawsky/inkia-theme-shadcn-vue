<script setup lang="ts">
import apexchart from "vue3-apexcharts";

let data_preventif = {
  options: {
    stroke: {
      show: false,
      width: 0,
    },
    chart: {
      id: "satuan-atas",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.1,
        inverseColors: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: [
      "#FFCA57",
      "#0194EC",
      "#99FFA3",
      "#FF89D7",
      "#E6F634",
      "#9885F9",
      "#4DEFE4",
      "#F46260",
    ],
    labels: [
      "Aplikasi",
      "Pemberian Obat",
      "Olahraga Bersama",
      "Penyemprotan Disinfektan",
      "Riksa Suhu",
      "Baksos & Bakkes",
      "Rikkes",
      "Pembagian APD (Masker/FaceShield/dll)",
    ],
  },
  series: [1, 1, 1, 1, 1, 1, 1, 1],
};
let series: number[] = [44, 55, 41, 17, 15];
let chartOptions: any = {
  chart: {
    type: "donut",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
</script>
<template>
  <div id="chart">
    <apexchart
      type="donut"
      :options="data_preventif.options"
      :series="data_preventif.series"
    ></apexchart>
  </div>
</template>
