<template>
  <div class="games--list">
    <div v-for="game in games" v-bind="{game}" :key="game.id">
      <slot v-bind="game"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "games-list",
  props: {
    games: {
      type: Array,
      required: true
    }
  }
};
</script>
