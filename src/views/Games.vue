<template>
  <div class="games">
    <SpotlightGame />
    <PopularGames />
  </div>
</template>

<script>
// @ is an alias to /src
import SpotlightGame from "@/components/SpotlightGame.vue";
import PopularGames from "@/components/PopularGames.vue";

export default {
  name: "games",
  components: {
    SpotlightGame,
    PopularGames
  }
};
</script>