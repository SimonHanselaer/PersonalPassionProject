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

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/movies",
      name: "movies",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/shows",
      name: "Tv-shows",
      component: Shows,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/games",
      name: "Games",
      component: Games,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/social",
      name: "Social",
      component: Social,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
