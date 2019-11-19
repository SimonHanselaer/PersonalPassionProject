import { configure } from '@storybook/vue';

import Vue from 'vue';

import Vuex from 'vuex';

import Mybutton from '../src/stories/Button.vue';

Vue.use(Vuex);

configure(require.context('../src', true, /\.stories\.js$/), module);

export const withText = () => '<my-component>with text</my-component>';
