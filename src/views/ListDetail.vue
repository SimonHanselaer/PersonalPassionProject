<template>
  <div class="contentContainer" v-if="computedListName">
    <h2>{{computedListName}}</h2>

    <section class="listDetailFormContainer">
      <form v-on:change="updateList">
        <div>
          <h3>Order by</h3>
          <label>
            <input type="radio" name="picked" v-model="listProps.sortBy" value="newestAdded" />
            Sort by newest added
          </label>
          <label>
            <input type="radio" name="picked" v-model="listProps.sortBy" value="name" />
            Sort by Name
          </label>
          <label>
            <input type="radio" name="picked" v-model="listProps.sortBy" value="releaseDate" />
            Sort by Release date
          </label>
        </div>
        <div>
          <h3>Filter</h3>
          <div>
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
              <input type="checkbox" name="filterDetail" v-model="filterDetail" :value="true" />
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
    <section>
      <MediaList v-if="computedListItems" :media="computedModifiedList">
        <mediaTile
          slot-scope="listItem"
          :title="listItem.name"
          :src="listItem.image"
          :id="listItem.id"
          :mediaType="listItem.type"
          :duration="0"
          :releaseDate="listItem.release_date"
        />
      </MediaList>
    </section>
  </div>
</template>

<script>
import MediaList from "../components/MediaList";
import MediaTile from "../components/MediaTile";
import store from "../store/index";

export default {
  name: "listdetail",
  components: { MediaTile, MediaList },
  data() {
    return {
      name: "",
      listProps: {
        sortBy: "newestAdded",
        type: ["movie", "tv", "game"],
        released: false,
        watched: false
      }
    };
  },
  created() {
    const properties = {
      id: this.$route.params.detailId
    };

    this.getName(properties);
    this.getListItems(properties);

    store.dispatch("modifyList", this.listProps);
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
    }
  },
  computed: {
    computedListName() {
      return store.state.listName;
    },
    computedListItems() {
      return store.state.listItems;
    },
    computedModifiedList() {
      return store.state.modifiedList;
    }
  }
};
</script>