<template>
  <div class="contentContainer" v-if="computedListName">
    <h2>{{computedListName}}</h2>

    <section class="listDetailFormContainer">
      <form>
        <div v-on:change="orderlist">
          <h3>Order by</h3>
          <label>
            <input type="radio" name="picked" v-model="picked" value="newestAdded" checked />
            Sort by newest added
          </label>
          <label>
            <input type="radio" name="picked" v-model="picked" value="name" />
            Sort by Name
          </label>
          <label>
            <input type="radio" name="picked" v-model="picked" value="releaseDate" />
            Sort by Release date
          </label>
        </div>
        <div>
          <h3>Filter</h3>
          <div v-on:change="filterList">
            <h4>Type</h4>
            <label>
              <input type="checkbox" name="filterType" v-model="filterType" value="movie" checked />
              Movie
            </label>
            <label>
              <input type="checkbox" name="filterType" v-model="filterType" value="tv" checked />
              TV-Serie
            </label>
            <label>
              <input type="checkbox" name="filterType" v-model="filterType" value="game" checked />
              Game
            </label>
          </div>
          <div>
            <h4>Detail</h4>
            <label>
              <input
                type="checkbox"
                name="filterDetail"
                v-model="filterDetail"
                :value="true"
                checked
              />
              Watched
            </label>
            <div v-on:change="filterList">
              <label>
                <input
                  type="checkbox"
                  name="filterReleasedBool"
                  v-model="filterReleasedBool"
                  value="true"
                  checked
                />
                Released
              </label>
            </div>
          </div>
        </div>
      </form>
    </section>
    <section>
      <MediaList v-if="computedListItems" :media="computedListItems">
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
      orderedList: [],
      picked: "newestAdded",
      filterType: [],
      filterDetail: [],
      filterReleasedBool: false
    };
  },
  created() {
    const properties = {
      id: this.$route.params.detailId
    };

    this.getName(properties);
    this.getListItems(properties);
    this.orderlist();
    this.filterList();
  },
  methods: {
    getName(properties) {
      this.$store.dispatch("getListName", properties.id);
    },
    getListItems(properties) {
      this.$store.dispatch("getListItems", properties.id);
    },
    orderlist() {
      let self = this;
      switch (self.picked) {
        case "newestAdded":
          self.ListOrderedAddedOn();
          break;

        case "name":
          self.ListOrderedName();
          break;

        case "releaseDate":
          self.ListOrderedRelease();
          break;

        default:
          self.ListOrderedAddedOn();
          break;
      }
    },
    filterList() {
      let self = this;
      const todayDate = new Date().toISOString().slice(0, 10);

      store.state.listItems = store.state.listItems.filter(mediaItem => {
        return (
          mediaItem.type == self.filterType[0] ||
          mediaItem.type == self.filterType[1] ||
          mediaItem.type == self.filterType[2] ||
          (self.filterReleasedBool && mediaItem.releaseDate < todayDate)
        );
      });
    },
    // filterReleased() {
    //   let self = this;

    //   if (self.filterReleasedBool) {
    //     self.orderedList = self.listItems.filter(mediaItem => {
    //       return mediaItem.releaseDate < todayDate;
    //     });
    //   }
    // },
    ListOrderedName() {
      let self = this;

      function compare(a, b) {
        const mediaItemA = a.name.toUpperCase();
        const mediaItemB = b.name.toUpperCase();

        let comparison = 0;
        if (mediaItemA > mediaItemB) {
          comparison = 1;
        } else if (mediaItemA < mediaItemB) {
          comparison = -1;
        }

        return comparison;
      }

      self.orderedList = store.state.listItems.sort(compare);
    },
    ListOrderedRelease() {
      let self = this;

      function compare(a, b) {
        const mediaItemA = a.releaseDate;
        const mediaItemB = b.releaseDate;

        let comparison = 0;
        if (mediaItemA > mediaItemB) {
          comparison = -1;
        } else if (mediaItemA < mediaItemB) {
          comparison = 1;
        }

        return comparison;
      }

      self.orderedList = store.state.listItems.sort(compare);
    },
    ListOrderedAddedOn() {
      let self = this;

      function compare(a, b) {
        const mediaItemA = a.addedOn;
        const mediaItemB = b.addedOn;

        let comparison = 0;
        if (mediaItemA > mediaItemB) {
          comparison = -1;
        } else if (mediaItemA < mediaItemB) {
          comparison = 1;
        }

        return comparison;
      }

      self.orderedList = store.state.listItems.sort(compare);
    }
  },
  computed: {
    computedListName() {
      return store.state.listName;
    },
    computedListItems() {
      return store.state.listItems;
    }
  }
};
</script>