<template>
  <div id="app" class="layout normal">
    <section class="sideBar">
      <div id="nav" class="nav sideBarItems">
        <router-link to="/">Movies</router-link>
        <router-link to="/shows">TV-shows</router-link>
        <router-link to="/games">Games</router-link>
        <router-link to="/social">Social</router-link>
        <router-link to="/profile">Profile</router-link>
      </div>
    </section>
    <router-view />
  </div>
</template>

<style>
@import "./styles/typo.module.css";
@import "./App.module.css";
</style>
