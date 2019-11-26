<template>
  <div class="searchresults--list">
    <div v-for="mediaItem in media" v-bind="{ mediaItem }" :key="mediaItem.id">
      <slot v-bind="mediaItem"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "media-list",
  props: {
    media: {
      type: Array,
      required: true
    }
  }
};
</script>
