<template>
  <div class="spotlight spotlightMovie">
    <h2 class="header-2">Spotlight</h2>
    <article v-if="!computedLoadingStatus & !computedLoadingStatusConfig" class="spotlightLayout">
      <h3 class="spotlightTitle header-3">{{ computedMovie.title }}</h3>
      <img
        class="spotlightImage"
        v-bind:src="
            computedConfig.images.base_url +
              computedConfig.images.poster_sizes[4] +
              computedMovie.poster_path
          "
        width="200"
      />
      <p
        class="spotlightGenre details"
        v-if="computedMovieDetails.genres[0]"
      >{{computedMovieDetails.genres[0].name}}</p>
      <p class="spotlightGenre details" v-else>Not found</p>
      <p class="spotlightRuntime details">{{computedRuntime}}</p>
      <p class="spotlightReleaseYear details">{{computedReleaseYear}}</p>
      <p class="spotlightOverview">{{computedMovieDetails.overview}}</p>
      <div class="spotlightBorder"></div>

      <button @click="addMediaItem" class="spotlightWatchlist wishlistButton">
        <svg
          width="22px"
          height="20px"
          viewBox="0 0 22 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
          <title>heart</title>
          <desc>Created with Sketch.</desc>
          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              id="MediaTile"
              transform="translate(-9.000000, -9.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
              stroke="#FFFFFF"
            >
              <g id="heart" transform="translate(10.000000, 10.000000)">
                <path
                  d="M18.3729237,1.65258475 C17.3263136,0.605974576 15.9407203,0.033940678 14.4619068,0.033940678 C12.9830932,0.033940678 11.5932627,0.610211864 10.5466525,1.65682203 L10.0000424,2.2034322 L9.44495763,1.64834746 C8.39834746,0.601737288 7.00427966,0.0212288136 5.5254661,0.0212288136 C4.05088983,0.0212288136 2.66105932,0.5975 1.61868644,1.63987288 C0.572076271,2.68648305 -0.00419491525,4.07631356 1.91706901e-05,5.55512712 C1.91706901e-05,7.03394068 0.580550847,8.4195339 1.62716102,9.46614407 L9.58478814,17.4237712 C9.69495763,17.5339407 9.84326271,17.5932627 9.98733051,17.5932627 C10.1313983,17.5932627 10.2797034,17.538178 10.3898729,17.4280085 L18.3644492,9.48309322 C19.4110593,8.43648305 19.9873539,7.04665254 19.9873539,5.56783898 C19.9915678,4.08902542 19.4195339,2.69919492 18.3729237,1.65258475 Z M17.5593644,8.67377119 L9.98733051,16.2161441 L2.43224576,8.66105932 C1.60173729,7.83055085 1.14411017,6.72885593 1.14411017,5.55512712 C1.14411017,4.38139831 1.5975,3.27970339 2.42800847,2.4534322 C3.25427966,1.62716102 4.35597458,1.1695339 5.5254661,1.1695339 C6.69919492,1.1695339 7.80512712,1.62716102 8.63563559,2.45766949 L9.59326271,3.41529661 C9.81783898,3.63987288 10.1780085,3.63987288 10.4025847,3.41529661 L11.3517373,2.46614407 C12.1822458,1.63563559 13.288178,1.17800847 14.4576695,1.17800847 C15.627161,1.17800847 16.7288559,1.63563559 17.5593644,2.46190678 C18.3898729,3.29241525 18.8432919,4.39411017 18.8432919,5.56783898 C18.8475,6.7415678 18.3898729,7.84326271 17.5593644,8.67377119 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </svg>
      </button>
      <div v-on-clickaway="handleClickAway">
        <button @click="isActive = !isActive" class="spotlightMoreOptions wishlistButton">
          <svg
            width="22px"
            height="7px"
            viewBox="0 0 22 7"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>more</title>
            <desc>Created with Sketch.</desc>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="MediaTile-OnHover"
                transform="translate(-169.000000, -15.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
                stroke="#FFFFFF"
                stroke-width="0.5"
              >
                <g id="more" transform="translate(170.000000, 16.000000)">
                  <path
                    d="M2.66666667,0 C1.19633333,0 0,1.19633333 0,2.66666667 C0,4.137 1.19633333,5.33333333 2.66666667,5.33333333 C4.137,5.33333333 5.33333333,4.137 5.33333333,2.66666667 C5.33333333,1.19633333 4.137,0 2.66666667,0 Z M2.66666667,4.66666667 C1.56366667,4.66666667 0.666666667,3.76966667 0.666666667,2.66666667 C0.666666667,1.56366667 1.56366667,0.666666667 2.66666667,0.666666667 C3.76966667,0.666666667 4.66666667,1.56366667 4.66666667,2.66666667 C4.66666667,3.76966667 3.76966667,4.66666667 2.66666667,4.66666667 Z"
                    id="Shape"
                  />
                  <path
                    d="M17.3333333,0 C15.863,0 14.6666667,1.19633333 14.6666667,2.66666667 C14.6666667,4.137 15.863,5.33333333 17.3333333,5.33333333 C18.8036667,5.33333333 20,4.137 20,2.66666667 C20,1.19633333 18.8036667,0 17.3333333,0 Z M17.3333333,4.66666667 C16.2303333,4.66666667 15.3333333,3.76966667 15.3333333,2.66666667 C15.3333333,1.56366667 16.2303333,0.666666667 17.3333333,0.666666667 C18.4363333,0.666666667 19.3333333,1.56366667 19.3333333,2.66666667 C19.3333333,3.76966667 18.4363333,4.66666667 17.3333333,4.66666667 Z"
                    id="Shape"
                  />
                  <path
                    d="M10,0 C8.52966667,0 7.33333333,1.19633333 7.33333333,2.66666667 C7.33333333,4.137 8.52966667,5.33333333 10,5.33333333 C11.4703333,5.33333333 12.6666667,4.137 12.6666667,2.66666667 C12.6666667,1.19633333 11.4703333,0 10,0 Z M10,4.66666667 C8.897,4.66666667 8,3.76966667 8,2.66666667 C8,1.56366667 8.897,0.666666667 10,0.666666667 C11.103,0.666666667 12,1.56366667 12,2.66666667 C12,3.76966667 11.103,4.66666667 10,4.66666667 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <div v-bind:class="{active: isActive}">
          <ul class="moreOptions textInputField">
            <li class="moreOptionsItem" @click="addToList">
              <svg
                width="10px"
                height="10px"
                viewBox="0 0 10 10"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
                <title>add</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g
                    id="Home"
                    transform="translate(-1265.000000, -373.000000)"
                    fill="#FFFFFF"
                    fill-rule="nonzero"
                  >
                    <g id="add" transform="translate(1265.000000, 373.000000)">
                      <path
                        d="M9.10714286,4.10714286 L6.07142857,4.10714286 C5.97281319,4.10714286 5.89285714,4.02718681 5.89285714,3.92857143 L5.89285714,0.892857143 C5.89285714,0.399780268 5.49307687,0 5,0 C4.50692313,0 4.10714286,0.399780268 4.10714286,0.892857143 L4.10714286,3.92857143 C4.10714286,4.02718681 4.02718681,4.10714286 3.92857143,4.10714286 L0.892857143,4.10714286 C0.399780268,4.10714286 0,4.50692313 0,5 C0,5.49307687 0.399780268,5.89285714 0.892857143,5.89285714 L3.92857143,5.89285714 C4.02718681,5.89285714 4.10714286,5.97281319 4.10714286,6.07142857 L4.10714286,9.10714286 C4.10714286,9.60021973 4.50692313,10 5,10 C5.49307687,10 5.89285714,9.60021973 5.89285714,9.10714286 L5.89285714,6.07142857 C5.89285714,5.97281319 5.97281319,5.89285714 6.07142857,5.89285714 L9.10714286,5.89285714 C9.60021973,5.89285714 10,5.49307687 10,5 C10,4.50692313 9.60021973,4.10714286 9.10714286,4.10714286 Z"
                        id="Path"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <p>Add to list</p>
            </li>
            <li class="moreOptionsItem" @click="addToSeen">
              <svg
                width="12px"
                height="8px"
                viewBox="0 0 12 8"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
                <title>view</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g
                    id="Home"
                    transform="translate(-1372.000000, -416.000000)"
                    fill="#FFFFFF"
                    fill-rule="nonzero"
                  >
                    <g id="view" transform="translate(1372.000000, 416.000000)">
                      <path
                        d="M11.9237109,3.61033594 C11.8165078,3.4636875 9.26221875,0.0195703125 5.99992969,0.0195703125 C2.73764063,0.0195703125 0.183234375,3.4636875 0.0761484375,3.61019531 C-0.0253828125,3.74932031 -0.0253828125,3.93801562 0.0761484375,4.07714062 C0.183234375,4.22378906 2.73764063,7.66790625 5.99992969,7.66790625 C9.26221875,7.66790625 11.8165078,4.22376562 11.9237109,4.07725781 C12.0253828,3.93815625 12.0253828,3.74932031 11.9237109,3.61033594 Z M5.99992969,6.87670312 C3.59690625,6.87670312 1.51563281,4.59077344 0.89953125,3.84346875 C1.51483594,3.09550781 3.59175,0.810773437 5.99992969,0.810773437 C8.40283594,0.810773437 10.4839688,3.09630469 11.1003281,3.84400781 C10.4850234,4.59194531 8.40810938,6.87670312 5.99992969,6.87670312 Z"
                        id="Shape"
                      />
                      <path
                        d="M5.99992969,1.47011719 C4.69113281,1.47011719 3.62629687,2.53495312 3.62629687,3.84375 C3.62629687,5.15254687 4.69113281,6.21738281 5.99992969,6.21738281 C7.30872656,6.21738281 8.3735625,5.15254687 8.3735625,3.84375 C8.3735625,2.53495312 7.30872656,1.47011719 5.99992969,1.47011719 Z M5.99992969,5.42615625 C5.12735156,5.42615625 4.41752344,4.71630469 4.41752344,3.84375 C4.41752344,2.97119531 5.127375,2.26134375 5.99992969,2.26134375 C6.87248438,2.26134375 7.58233594,2.97119531 7.58233594,3.84375 C7.58233594,4.71630469 6.87250781,5.42615625 5.99992969,5.42615625 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <p>Seen</p>
            </li>
          </ul>
        </div>
      </div>
      <button @click="goToDetail" class="spotlightCTA normal">See more</button>
    </article>
  </div>
</template>

<script>
import store from "./../store/index";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "spotlightmovie",
  mixins: [clickaway],
  data() {
    return {
      isActive: true
    };
  },
  created() {
    this.$store.dispatch("fetchSpotlightMovie");
    this.$store.dispatch("fetchConfig");
    this.$store.dispatch("getLists");
  },
  methods: {
    addMediaItem() {
      let self = this;

      const src =
        self.computedConfig.images.base_url +
        self.computedConfig.images.poster_sizes[4] +
        self.computedMovie.poster_path;

      let data = {
        id: self.computedMovie.id,
        title: self.computedMovie.title,
        src: src,
        type: "movie",
        duration: self.computedMovieDetails.runtime,
        releaseDate: self.computedMovie.release_date
      };

      this.$store.dispatch("addWatchlistItem", data);
    },
    goToDetail() {
      let self = this;

      this.$router.push({
        name: "detail",
        params: { detailId: self.computedMovie.id, mediaType: "movie" }
      });
    },
    handleClickAway() {
      this.isActive = true;
    },
    async addToList() {
      let self = this;
      const modalData = {
        title: self.computedMovie.title,
        id: self.computedMovie.id,
        src:
          self.computedConfig.images.base_url +
          self.computedConfig.images.poster_sizes[4] +
          self.computedMovie.poster_path,
        releaseDate: self.computedMovieDetails.release_date,
        duration: self.computedMovieDetails.runtime,
        mediaType: "movie"
      };

      this.$store.dispatch("setModalValues", modalData);

      this.$modal.show("addMediaToList");
    },
    addToSeen() {
      let self = this;
      this.$store.dispatch("addToWatched", self.computedMovie.id);
    }
  },
  computed: {
    computedMovie() {
      return store.state.spotlightMovie;
    },
    computedMovieDetails() {
      return store.state.spotlightMovieDetails;
    },
    computedConfig() {
      return store.state.config;
    },
    computedLoadingStatus() {
      return store.state.loadingStatusSpotlight;
    },
    computedLoadingStatusConfig() {
      return store.state.loadingStatusConfig;
    },
    computedReleaseYear() {
      return store.state.spotlightMovieDetails.release_date.slice(0, 4);
    },
    computedRuntime() {
      const hours = Math.floor(store.state.spotlightMovieDetails.runtime / 60);
      const minutes = store.state.spotlightMovieDetails.runtime % 60;
      const convertedTime = `${hours}h ${minutes}min`;

      return convertedTime;
    }
  }
};
</script>
