<template>
  <div class="profilelists">
    <section class="listsHeaderContainer">
      <h2 class="header-2">My lists</h2>
      <section class="listButtonContainer">
        <button class="button" @click="addNewList">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->
            <title>add</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="Profile"
                transform="translate(-1319.000000, -351.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <g id="add" transform="translate(1319.000000, 351.000000)">
                  <path
                    d="M18.2142857,8.21428572 L12.1428571,8.21428572 C11.9456264,8.21428572 11.7857143,8.05437362 11.7857143,7.85714286 L11.7857143,1.78571429 C11.7857143,0.799560536 10.9861537,0 10,0 C9.01384626,0 8.21428572,0.799560536 8.21428572,1.78571429 L8.21428572,7.85714286 C8.21428572,8.05437362 8.05437362,8.21428572 7.85714286,8.21428572 L1.78571429,8.21428572 C0.799560536,8.21428572 0,9.01384626 0,10 C0,10.9861537 0.799560536,11.7857143 1.78571429,11.7857143 L7.85714286,11.7857143 C8.05437362,11.7857143 8.21428572,11.9456264 8.21428572,12.1428571 L8.21428572,18.2142857 C8.21428572,19.2004395 9.01384626,20 10,20 C10.9861537,20 11.7857143,19.2004395 11.7857143,18.2142857 L11.7857143,12.1428571 C11.7857143,11.9456264 11.9456264,11.7857143 12.1428571,11.7857143 L18.2142857,11.7857143 C19.2004395,11.7857143 20,10.9861537 20,10 C20,9.01384626 19.2004395,8.21428572 18.2142857,8.21428572 Z"
                    id="Path"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
      </section>
    </section>
    <ul v-if="computedUserLists" class="listContainer">
      <li
        v-for="list in computedUserLists"
        v-bind:key="list.id"
        @click="goToListDetail(list.id)"
        class="listTile"
      >
        <h3 class="listTitle header-9">{{ list.name }}</h3>
        <p class="listCount">{{ list.count }} items</p>
        <section class="listImage">
          <img :src="image" alt v-for="image in list.thumbnails" :key="image.id" />
        </section>
        <section class="listDelete" v-if="list.id != computedUserId">
          <button class="button listDeleteButton" @click.stop="deleteList(list.id)">
            <p>delete</p>
          </button>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "profilelists",
  mixins: [clickaway],
  data() {
    return {
      isActive: true
    };
  },
  components: {},
  created() {
    this.$store.dispatch("getLists");
  },
  methods: {
    goToListDetail(id) {
      this.$router.push({
        name: "listDetail",
        params: { detailId: id }
      });
    },
    addNewList() {
      this.$modal.show("addNewList");
    },
    handleClickAway() {
      this.isActive = true;
    },
    deleteList(id) {
      this.$store.dispatch("deleteList", id);
      this.$store.dispatch("getLists");
    }
  },
  computed: {
    computedUserLists() {
      return store.state.userLists;
    },
    computedUserId() {
      return localStorage.uid;
    }
  }
};
</script>
