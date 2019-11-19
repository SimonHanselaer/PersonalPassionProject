<template>
  <div class="home">
    <PopularMovies />
  </div>
</template>

<script>
// @ is an alias to /src
import PopularMovies from "@/components/PopularMovies.vue";

export default {
  name: "home",
  components: {
    PopularMovies
  }
};
</script>
