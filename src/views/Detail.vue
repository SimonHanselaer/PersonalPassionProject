<template>
  <div v-if="!computedLoadingState & !computedLoadingStateConfig" class="contentContainer">
    <article v-if="this.$route.params.mediaType == 'movie'" class="detail">
      <h3 class="detailTitle header-5">{{computedDetails.title}}</h3>
      <p class="detailGenre">{{computedDetails.genres[0].name}}</p>
      <p class="detailRuntime">{{computedDetails.runtime}}</p>
      <p class="detailReleaseYear">{{computedDetails.release_date}}</p>
      <section class="detailOverview">
        <h4 class="header-6">Description</h4>
        <p>{{computedDetails.overview}}</p>
      </section>
      <div class="detailRating">
        <p>{{computedDetails.vote_average}}</p>
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
          <title>star</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              id="Detail"
              transform="translate(-1340.000000, -137.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <g id="star" transform="translate(1340.000000, 137.000000)">
                <path
                  d="M14.6568,6.5193 C14.9517,6.2319 15.0558,5.8101 14.9286,5.418 C14.8011,5.0259 14.469,4.746 14.061,4.6866 L10.4334,4.1595 C10.2789,4.137 10.1454,4.0401 10.0764,3.9 L8.4546,0.6129 C8.2725,0.2436 7.9029,0.0141 7.491,0.0141 C7.0794,0.0141 6.7098,0.2436 6.5277,0.6129 L4.9056,3.9 C4.8366,4.0401 4.7028,4.137 4.5483,4.1595 L0.9207,4.6869 C0.513,4.746 0.1809,5.0259 0.0534,5.418 C-0.0738,5.8101 0.0303,6.2319 0.3252,6.5193 L2.9499,9.0777 C3.0618,9.1869 3.1131,9.3441 3.0867,9.4977 L2.4672,13.1106 C2.3976,13.5165 2.5611,13.9188 2.8944,14.1612 C3.2274,14.4039 3.6609,14.4354 4.026,14.2431 L7.2702,12.5373 C7.4085,12.4647 7.5735,12.4647 7.7118,12.5373 L10.9563,14.2431 C11.1147,14.3265 11.2863,14.3676 11.457,14.3676 C11.6787,14.3676 11.8995,14.2983 12.0879,14.1612 C12.4212,13.9188 12.5847,13.5165 12.5151,13.1106 L11.8953,9.498 C11.8689,9.3441 11.9202,9.1872 12.0321,9.078 L14.6568,6.5193 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <img
        class="detailImage"
        :src="computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            computedDetails.poster_path"
        height="400"
        alt
      />
      <a
        target="_blank"
        class="detailImdb header-7"
        :href="'https://www.imdb.com/title/' + computedDetails.imdb_id"
      >View on IMDB</a>
      <section class="detailCast">
        <h4 class="header-6">Cast</h4>
        <ul class="castList">
          <li v-for="actor in computedActors" v-bind:key="actor.id" class="castTile">
            <img
              class="castImage"
              :src="computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            actor.profile_path"
              height="225"
              alt
            />
            <p class="castName">{{actor.name}}</p>
          </li>
        </ul>
      </section>

      <section class="detailDetails">
        <h4 class="header-6">Details</h4>
        <div>
          <h5 class="header-7">Director</h5>
          <p>{{computedDirector[0].name}}</p>
        </div>
        <div>
          <h5 class="header-7">Release date</h5>
          <p>{{computedDetails.release_date}}</p>
        </div>
      </section>
      <div class="detailBorder"></div>
      <img
        class="detailBackdrop"
        :src="computedConfig.images.base_url +
            computedConfig.images.backdrop_sizes[3] +
            computedDetails.backdrop_path"
        width="1280"
        alt
      />
    </article>
    <article v-else-if="this.$route.params.mediaType == 'tv'" class="detail">
      <h3 class="detailTitle header-5">{{computedDetails.name}}</h3>
      <p class="detailGenre">{{computedDetails.genres[0].name}}</p>
      <p class="detailRuntime">{{computedDetails.episode_run_time[0]}}</p>
      <p class="detailReleaseYear">{{computedDetails.first_air_date}}</p>
      <section class="detailOverview">
        <h4 class="header-6">Description</h4>
        <p>{{computedDetails.overview}}</p>
      </section>
      <p class="detailRating">{{computedDetails.vote_average}}</p>
      <img
        class="detailImage"
        :src="computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            computedDetails.poster_path"
        height="400"
        alt
      />
      <a
        target="_blank"
        class="detailImdb header-7"
        :href="'https://www.imdb.com/title/' + computedExternalId.imdb_id"
      >View on IMDB</a>
      <section class="detailCast">
        <h4 class="header-6">Cast</h4>
        <ul class="castList">
          <li v-for="actor in computedActors" v-bind:key="actor.id" class="castTile">
            <img
              class="castImage"
              :src="computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            actor.profile_path"
              height="225"
              alt
            />
            <p class="castName">{{actor.name}}</p>
          </li>
        </ul>
      </section>
      <section class="detailDetails">
        <h4 class="header-6">Details</h4>
        <div>
          <h5 class="header-7">Creators</h5>
          <ul>
            <li
              v-for="creator in computedDetails.created_by"
              v-bind:key="creator.id"
            >{{creator.name}}</li>
          </ul>
        </div>
        <div v-if="computedDetails.in_production">
          <h5 class="header-7">Next episode</h5>
          <p>{{computedDetails.next_episode_to_air.air_date}}</p>
        </div>
        <div v-else>
          <h5 class="header-7">Status</h5>
          <p>Ended</p>
        </div>
      </section>
      <div class="detailBorder"></div>
      <img
        class="detailBackdrop"
        :src="computedConfig.images.base_url +
            computedConfig.images.backdrop_sizes[3] +
            computedDetails.backdrop_path"
        width="1280"
        alt
      />
    </article>

    <article v-else-if="this.$route.params.mediaType == 'game'">
      <h3>Game</h3>
    </article>
    <article v-else>
      <h3>Something went wrong!</h3>
    </article>
  </div>
</template>

<script>
import store from "./../store/index";

export default {
  name: "detail",
  data() {
    return {};
  },
  created() {
    const properties = {
      id: this.$route.params.detailId,
      type: this.$route.params.mediaType
    };
    this.$store.dispatch("fetchDetails", properties);
    this.$store.dispatch("fetchConfig");
  },
  computed: {
    computedDetails() {
      return store.state.mediaDetails;
    },
    computedCredits() {
      return store.state.mediaDetailsCredits;
    },
    computedExternalId() {
      return store.state.mediaDetailsExternalId;
    },
    computedConfig() {
      return store.state.config;
    },
    computedLoadingState() {
      return store.state.loadingStatusDetails;
    },
    computedLoadingStateConfig() {
      return store.state.loadingStatusConfig;
    },
    computedActors() {
      return store.state.mediaDetailsCredits.cast.splice(0, 5);
    },
    computedDirector() {
      return store.state.mediaDetailsCredits.crew.filter(person => {
        return person.job == "Director";
      });
    }
  }
};
</script>