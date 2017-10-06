import Vuex from 'vuex';
import Vue from 'vue';

import projectsModule from './modules/projectsModule';
import authModule from './modules/authModule';

Vue.use(Vuex);


export const store = new Vuex.Store({
    modules:{
        projectsModule: projectsModule,
        authModule: authModule
    }
});