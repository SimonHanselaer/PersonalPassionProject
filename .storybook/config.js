import Vue from 'vue';
import Vuex from 'vuex';

import { configure } from '@storybook/vue';

Vue.use(Vuex);

function loadStories() {
    require("../src/stories");
}

configure(loadStories, module);
