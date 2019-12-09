<template>
  <div class="searchBarContainer" v-on-clickaway="handleClickAway">
    <input
      type="text"
      class="textInputField searchBar"
      placeholder="Search your favorite media"
      v-model="inputQuery"
      @keyup="handleChange"
      @focus="inputFocused = true"
    />
    <svg
      class="searchBarIcon"
      width="16px"
      height="16px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>search</title>
      <g
        id="Symbols"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="search"
          transform="translate(1.000000, 1.000000)"
          fill="#FFFFFF"
          fill-rule="nonzero"
          stroke="#FFFFFF"
        >
          <path
            d="M19.5109434,19.3483019 L13.9037736,13.5169811 C15.3339623,12.0826415 16.22,10.105283 16.22,7.9245283 C16.22,3.55471698 12.665283,0 8.2954717,0 C3.92566038,0 0.370943396,3.55471698 0.370943396,7.9245283 C0.370943396,12.2943396 3.92566038,15.8490566 8.2954717,15.8490566 C10.2135849,15.8490566 11.9739623,15.1633962 13.3460377,14.0256604 L18.9667925,19.8713208 C19.0407547,19.9486792 19.1396226,19.9871698 19.2388679,19.9871698 C19.3332075,19.9871698 19.4271698,19.9520755 19.5003774,19.8818868 C19.650566,19.7373585 19.6550943,19.4984906 19.5109434,19.3483019 Z M8.2954717,15.0943396 C4.34188679,15.0943396 1.12566038,11.8781132 1.12566038,7.9245283 C1.12566038,3.9709434 4.34188679,0.754716981 8.2954717,0.754716981 C12.2490566,0.754716981 15.465283,3.9709434 15.465283,7.9245283 C15.465283,11.8781132 12.2486792,15.0943396 8.2954717,15.0943396 Z"
            id="Shape"
          />
        </g>
      </g>
    </svg>
    <SearchResultsList v-if="inputFocused" :media="computedResults">
      <SearchResultItem slot-scope="mediaItem" :data="mediaItem" />
    </SearchResultsList>
  </div>
</template>

<script>
import store from "./../store/index";
import SearchResultsList from "./SearchResultsList";
import SearchResultItem from "./SearchResultItem";

import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "searchBar",
  mixins: [clickaway],
  components: { SearchResultsList, SearchResultItem },
  watch: {
    $route: {
      deep: true,
      handler: function() {
        this.inputQuery = "";
        this.inputFocused = false;
      }
    }
  },
  data() {
    return {
      inputQuery: "",
      inputFocused: false
    };
  },
  methods: {
    handleChange() {
      if (this.inputQuery.length > 0) {
        this.$store.dispatch("fetchSearchQuery", this.inputQuery);
      } else {
        store.state.searchResults = [];
      }
    },
    handleClickAway() {
      this.inputFocused = false;
    }
  },
  computed: {
    computedResults() {
      return store.state.searchResults;
    }
  }
};
</script>
