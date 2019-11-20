<template>
  <div class="shows">
    <SpotlightSerie />
    <PopularSeries />
    <!-- <UpcomingSeries /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import SpotlightSerie from "@/components/SpotlightSerie.vue";
import PopularSeries from "@/components/PopularSeries.vue";
// import UpcomingSeries from "@/components/UpcomingSeries.vue";

export default {
  name: "home",
  components: {
    SpotlightSerie,
    PopularSeries
    //UpcomingSeries
  }
};
</script>

