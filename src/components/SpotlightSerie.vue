<template>
  <div class="spotlightSerie">
    <h2 class="header-2">Spotlight</h2>
    <article v-if="!isLoadingSeries & !isLoadingConfig">
      <h3>{{computedSerie.title}}</h3>
      <img
        v-bind:src="config.images.base_url + config.images.poster_sizes[4] + computedSerie.poster_path"
        width="200"
      />
    </article>
  </div>
</template>

<script>
import { RepositoryFactory } from "./../repositories/repositoryFactory";
const MediaRepository = RepositoryFactory.get("media");

export default {
  name: "spotlightserie",
  data() {
    return {
      isLoadingSeries: false,
      isLoadingConfig: false,
      serie: [],
      config: [],
      PageNumber: 0,
      refactoredNumber: 0
    };
  },
  created() {
    this.fetchSeries();
    this.fetchConfig();
  },
  methods: {
    async fetchSeries() {
      this.isLoadingSeries = true;
      const { data } = await MediaRepository.getSpotlightSerie();
      this.isLoadingSeries = false;
      this.PageNumber = data.page;
      this.refactoredNumber = Math.ceil((this.PageNumber / 33) * 20);
      this.serie = data.results;
    },
    async fetchConfig() {
      this.isLoadingConfig = true;
      const { data } = await MediaRepository.getConfig();
      this.isLoadingConfig = false;
      this.config = data;
    }
  },
  computed: {
    computedSerie() {
      return this.serie[this.refactoredNumber];
    }
  }
};
</script>