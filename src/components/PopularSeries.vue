<template>
  <div class="popularSeries">
    <h2>Popular series</h2>
    <seriesList v-if="!isLoadingSeries & !isLoadingConfig" :series="computedSeries">
      <template slot-scope="serie">
        <h3 class="text-base">{{serie.name}}</h3>
        <img
          v-bind:src="config.images.base_url + config.images.poster_sizes[4] + serie.poster_path"
          width="200"
        />
      </template>
    </seriesList>
  </div>
</template>

<script>
import seriesList from "./SeriesList";
import { RepositoryFactory } from "./../repositories/repositoryFactory";
const MediaRepository = RepositoryFactory.get("media");

export default {
  name: "popularseries",
  components: { seriesList },
  data() {
    return {
      isLoadingSeries: false,
      isLoadingConfig: false,
      series: [],
      config: []
    };
  },
  created() {
    this.fetchSeries();
    this.fetchConfig();
  },
  methods: {
    async fetchSeries() {
      this.isLoadingSeries = true;
      const { data } = await MediaRepository.getPopularSeries();
      this.isLoadingSeries = false;
      this.series = data.results;
    },
    async fetchConfig() {
      this.isLoadingConfig = true;
      const { data } = await MediaRepository.getConfig();
      this.isLoadingConfig = false;
      this.config = data;
    }
  },
  computed: {
    computedSeries() {
      return this.series.slice(0, 5);
    }
  }
};
</script>