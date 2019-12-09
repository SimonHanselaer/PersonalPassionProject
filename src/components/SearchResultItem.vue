<template>
  <article
    class="searchItem"
    v-if="data.poster_path || data.profile_path"
    @click="goToDetail(data.id, data.media_type)"
  >
    <h3 v-if="data.media_type == 'movie'" class="searchItemTitle">
      {{ data.title }}
    </h3>
    <h3 class="searchItemTitle" v-else>{{ data.name }}</h3>
    <img
      v-if="(data.media_type == 'movie') | (data.media_type == 'tv')"
      class="searchItemImage"
      height="50"
      :src="
        computedConfig.images.base_url +
          computedConfig.images.poster_sizes[2] +
          data.poster_path
      "
    />
    <img
      v-if="data.media_type == 'person'"
      class="searchItemImage"
      height="50"
      :src="
        computedConfig.images.base_url +
          computedConfig.images.poster_sizes[2] +
          data.profile_path
      "
    />
  </article>
</template>

<script>
import store from "./../store/index";

export default {
  name: "searchresultitem",
  props: ["data"],
  created() {
    // this.$store.dispatch("fetchConfig");
  },
  methods: {
    goToDetail(id, mediaType) {
      this.$router.push({
        name: "detail",
        params: { detailId: id, mediaType: mediaType }
      });
    }
  },
  computed: {
    computedConfig() {
      return store.state.config;
    }
  }
};
</script>

<style>
@import "./SearchResults.module.css";
</style>
