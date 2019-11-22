<template>
  <div class="profile contentContainer">
    <watchlist />
  </div>
</template>

<script>
// @ is an alias to /src
import watchlist from "../components/watchlist.vue";

export default {
  name: "profile",
  components: {
    watchlist
  }
};
</script>
