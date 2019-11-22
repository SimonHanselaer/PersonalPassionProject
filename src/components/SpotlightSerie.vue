<template>
  <div class="spotlight spotlightSerie">
    <h2 class="header-2">Spotlight</h2>
    <article v-if="!isLoadingSeries & !isLoadingConfig & !isLoadingDetails" class="spotlightLayout">
      <h3 class="spotlightTitle header-3">{{ computedSerie.name }}</h3>
      <img
        class="spotlightImage"
        v-bind:src="
          config.images.base_url +
            config.images.poster_sizes[4] +
            computedSerie.poster_path
        "
        width="200"
      />
      <p class="spotlightGenre details">{{serieDetails.genres[0].name}}</p>
      <p class="spotlightRuntime details">{{computedRuntime}}</p>
      <p class="spotlightReleaseYear details">{{computedReleaseYear}}</p>
      <p class="spotlightOverview">{{serieDetails.overview}}</p>
      <div class="spotlightBorder"></div>
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
      isLoadingDetails: false,
      serie: [],
      config: [],
      serieDetails: [],
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
      this.fetchDetails();
    },
    async fetchConfig() {
      this.isLoadingConfig = true;
      const { data } = await MediaRepository.getConfig();
      this.isLoadingConfig = false;
      this.config = data;
    },
    async fetchDetails() {
      this.isLoadingDetails = true;
      const { data } = await MediaRepository.getSerieDetails(
        this.serie[this.refactoredNumber].id
      );
      console.log(data);
      this.serieDetails = data;
      this.isLoadingDetails = false;
    }
  },
  computed: {
    computedSerie() {
      return this.serie[this.refactoredNumber];
    },
    computedReleaseYear() {
      return this.serieDetails.first_air_date.slice(0, 4);
    },
    computedRuntime() {
      const hours = Math.floor(this.serieDetails.episode_run_time[0] / 60);
      const minutes = this.serieDetails.episode_run_time[0] % 60;
      const convertedTime = `${hours}h ${minutes}min`;

      return convertedTime;
    }
  }
};
</script>
