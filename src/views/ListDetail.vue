<template>
  <div class="contentContainer listDetail" v-if="computedListName">
    <h2 class="header-2">{{ computedListName }}</h2>
    <section class="filterButton">
      <button class="button" @click="handleFilterChange">
        <svg
          width="22px"
          height="22px"
          viewBox="0 0 22 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
          <title>filter</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              id="Profile"
              transform="translate(-1358.000000, -350.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
              stroke="#FFFFFF"
              stroke-width="0.5"
            >
              <g id="filter" transform="translate(1359.000000, 351.000000)">
                <path
                  d="M19.1331169,-1.54111493e-06 L0.885754857,-1.54111493e-06 C0.563920468,-0.000608768831 0.26887174,0.179180208 0.121753247,0.465503273 C-0.0273944935,0.755681818 -0.00121753247,1.10511366 0.189326286,1.37012987 L6.87439122,10.7873377 C6.87662338,10.7905844 6.87905844,10.7936283 6.8812906,10.796875 C7.12418831,11.1247971 7.25547891,11.5219156 7.2562906,11.9301948 L7.2562906,19.6079545 C7.25487013,19.8354302 7.34415584,20.0537743 7.50446431,20.2150974 C7.66477273,20.3764205 7.88271106,20.4669237 8.10998379,20.4669237 C8.22564935,20.4669237 8.33989449,20.4437906 8.44663148,20.3995536 L12.203125,18.9671266 C12.5397727,18.8644481 12.7631899,18.546875 12.7631899,18.1643669 L12.7631899,11.9301948 C12.7637987,11.5221185 12.8952922,11.1247971 13.137987,10.796875 C13.1402192,10.7936283 13.1426542,10.7905844 13.1448863,10.7873377 L19.8297484,1.36972405 C20.0202922,1.1049107 20.0464691,0.755681818 19.8973215,0.465503273 C19.7502029,0.179180208 19.4551542,-0.000608768831 19.1331169,-1.54111493e-06 Z M12.3003247,10.1814124 C11.9269481,10.6881088 11.7250406,11.3007305 11.7238231,11.9301948 L11.7238231,18.0381494 L8.29525164,19.3453734 L8.29525164,11.9301948 C8.29403408,11.3007305 8.09212665,10.6881088 7.71854706,10.1814124 L1.22849029,1.03896104 L18.7905844,1.03896104 L12.3003247,10.1814124 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </svg>
      </button>
    </section>

    <section class="listDetailFormContainer" v-if="showFilterBoolean">
      <form v-on:change="updateList" class="listDetailForm">
        <div class="listDetailFormOrder">
          <h3>Order by</h3>

          <multiselect
            @input="updateList"
            v-model="listProps.sortBy"
            :options="options"
            :searchable="false"
            :block-keys="['Tab', 'Enter']"
            select-label=" "
            deselect-label=" "
            :showLabels="false"
          ></multiselect>
        </div>
        <div class="listDetailFormFilter">
          <h3 class="visually-hidden">Filter</h3>
          <div class="listDetailFormType">
            <h4>Type</h4>
            <label>
              <input type="checkbox" name="filterType" v-model="listProps.type" value="movie" />
              Movie
            </label>
            <label>
              <input type="checkbox" name="filterType" v-model="listProps.type" value="tv" />
              TV-Serie
            </label>
            <label>
              <input type="checkbox" name="filterType" v-model="listProps.type" value="game" />
              Game
            </label>
          </div>
          <div>
            <h4>Detail</h4>
            <label>
              <input type="checkbox" name="filterDetail" v-model="listProps.watched" :value="true" />
              Watched
            </label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="filterReleasedBool"
                  v-model="listProps.released"
                  value="true"
                />
                Released
              </label>
            </div>
          </div>
        </div>
      </form>
    </section>
    <section class="listItemsSectionContainer">
      <MediaList
        v-if="computedListItems && computedModifiedList"
        :media="computedModifiedList"
        class="listItemsContainer"
      >
        <mediaTile
          slot-scope="listItem"
          :title="listItem.name"
          :src="listItem.image"
          :id="listItem.id"
          :mediaType="listItem.type"
          :duration="0"
          :releaseDate="listItem.releaseDate"
          :inList="true"
          :listId="computedListId"
        />
      </MediaList>
    </section>
  </div>
</template>

<script>
import MediaList from "../components/MediaList";
import MediaTile from "../components/MediaTile";
import store from "../store/index";

import Multiselect from "vue-multiselect";

export default {
  name: "listdetail",
  components: { MediaTile, MediaList, Multiselect },
  data() {
    return {
      name: "",
      listProps: {
        sortBy: "newestAdded",
        type: ["movie", "tv", "game"],
        released: false,
        watched: false
      },
      listItems: [],
      showFilterBoolean: false,
      options: ["newestAdded", "name", "releaseDate"]
    };
  },
  async created() {
    const properties = {
      id: this.$route.params.detailId
    };

    this.getName(properties);
    this.getListItems(properties);

    store.dispatch("getWatchedMedia");
    store.dispatch("getWatchedMediaItems");
  },
  methods: {
    getName(properties) {
      this.$store.dispatch("getListName", properties.id);
    },
    getListItems(properties) {
      this.$store.dispatch("getListItems", properties.id);
    },
    updateList() {
      let self = this;
      store.dispatch("modifyList", self.listProps);
    },
    handleFilterChange() {
      let self = this;
      self.showFilterBoolean = !self.showFilterBoolean;
    }
  },
  computed: {
    computedListName() {
      return store.state.listName;
    },
    computedListItems() {
      let self = this;
      store.dispatch("modifyList", self.listProps);
      return store.state.listItems;
    },
    computedModifiedList() {
      return store.state.modifiedList;
    },
    computedListId() {
      return this.$route.params.detailId;
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.multiselect {
  width: 30rem;
}

.multiselect__tags {
  border-radius: 0;
  border: 0.1rem solid #3764fc;
  background: none;
}

.multiselect__single {
  background: none;
  color: #fff;
  padding-top: 1.2rem;
  line-height: 0;
}
</style>