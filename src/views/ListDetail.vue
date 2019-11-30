<template>
  <div class="contentContainer" v-if="name">
    <h2>{{name}}</h2>
    <section>
      <form v-on:change="orderlist">
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
      </form>
    </section>
    <section>
      <MediaList v-if="listItems" :media="orderedList">
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
import { db } from "../main";
import MediaList from "../components/MediaList";
import MediaTile from "../components/MediaTile";

export default {
  name: "listdetail",
  components: { MediaTile, MediaList },
  data() {
    return {
      listItems: [],
      name: "",
      orderedList: [],
      picked: "newestAdded"
    };
  },
  created() {
    const properties = {
      id: this.$route.params.detailId
    };

    this.getName(properties);
    this.getListItems(properties);
    this.orderlist();
  },
  methods: {
    getName(properties) {
      let self = this;
      db.collection("lists")
        .doc(properties.id)
        .get()
        .then(doc => {
          self.name = doc.data().name;
        });
    },
    getListItems(properties) {
      let self = this;
      db.collection("lists")
        .doc(properties.id)
        .collection("media")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            self.listItems.push({
              id: doc.id,
              name: doc.data().name,
              image: doc.data().image,
              type: doc.data().type,
              releaseDate: doc.data().releaseDate,
              duration: doc.data().duration,
              addedOn: doc.data().addedOn
            });
          });
        });
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

      self.orderedList = self.listItems.sort(compare);
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

      self.orderedList = self.listItems.sort(compare);
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

      self.orderedList = self.listItems.sort(compare);
    }
  },
  computed: {}
};
</script>