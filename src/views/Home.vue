<template>
  <div class="home">
    <SpotlightMovie />
    <PopularMovies />
    <UpcomingMovies />
  </div>
</template>

<script>
// @ is an alias to /src
import SpotlightMovie from "@/components/SpotlightMovie.vue";
import PopularMovies from "@/components/PopularMovies.vue";
import UpcomingMovies from "@/components/UpcomingMovies.vue";

export default {
  name: "home",
  components: {
    SpotlightMovie,
    PopularMovies,
    UpcomingMovies
  }
};
</script>
