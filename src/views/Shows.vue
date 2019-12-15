<template>
  <div class="shows contentContainer layoutContentSeries">
    <SpotlightSerie />
    <PopularSeries />
    <RecommendedSeries />
    <!-- <UpcomingSeries /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import SpotlightSerie from "../components/SpotlightSerie.vue";
import PopularSeries from "../components/PopularSeries.vue";
import RecommendedSeries from "../components/RecommendedSeries.vue";
// import UpcomingSeries from "@/components/UpcomingSeries.vue";

export default {
  name: "shows",
  components: {
    SpotlightSerie,
    PopularSeries,
    RecommendedSeries
    //UpcomingSeries
  }
};
</script>
