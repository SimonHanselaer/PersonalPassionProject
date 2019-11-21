<template>
  <div class="series--list listLayout">
    <div v-for="serie in series" v-bind="{serie}" :key="serie.id" class="mediaTile">
      <slot v-bind="serie"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "series-list",
  props: {
    series: {
      type: Array,
      required: true
    }
  }
};
</script>
