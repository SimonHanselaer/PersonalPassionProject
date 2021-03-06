import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Shows from "../views/Shows.vue";
import Games from "../views/Games.vue";
import Social from "../views/Social.vue";
import Profile from "../views/Profile.vue";
import Detail from "../views/Detail.vue";
import ListDetail from "../views/ListDetail.vue";
import Navigation from "../components/Navigation.vue";
import SearchPeople from "../views/SearchPeople.vue";
import Settings from "../views/Settings.vue";
import Footer from "../components/Footer.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: { name: "movies" }
    },
    {
      path: "/",
      redirect: { name: "movies" }
    },
    {
      path: "/login",
      name: "login",
      components: { content: Login }
    },
    {
      path: "/register",
      name: "register",
      components: { content: Register }
    },
    {
      path: "../movies",
      name: "movies",
      components: { content: Home, navigation: Navigation, footer: Footer },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/shows",
      name: "shows",
      components: { content: Shows, navigation: Navigation, footer: Footer },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/games",
      name: "games",
      components: { content: Games, navigation: Navigation, footer: Footer },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/social",
      name: "social",
      components: { content: Social, navigation: Navigation, footer: Footer },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { content: Profile, navigation: Navigation, footer: Footer },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/detail/:mediaType/:detailId",
      name: "detail",
      components: { content: Detail, navigation: Navigation, footer: Footer },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/listDetail/:detailId",
      name: "listDetail",
      components: { content: ListDetail, navigation: Navigation, footer: Footer },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/searchPeople",
      name: "searchPeople",
      components: { content: SearchPeople, navigation: Navigation, footer: Footer },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/settings",
      name: "settings",
      components: { content: Settings, navigation: Navigation, footer: Footer },
      meta: {
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});

export default router;
