<template>
  <div class="watchlist">
    <h2 class="header-2">Watchlist</h2>

    <ApolloQuery :query="require('../graphql/Media.gql')">
      <div slot-scope="{ result: { data } }" class="listLayout">
        <template v-if="data">
          <article v-for="mediaItem of data.media" :key="mediaItem.id" class="mediaTile">
            <h3 class="title">{{ mediaItem.mediaTitle }}</h3>
            <img class="imageMedia" v-bind:src="mediaItem.mediaImage" height="300" alt />
          </article>
        </template>
      </div>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: "watchlist",
  components: {},
  data() {},
  created() {},
  methods: {},
  computed: {}
};
</script>
