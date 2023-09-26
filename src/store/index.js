import {createStore} from 'vuex'

const state = {
    isAuthorized: false,
};

const mutations = {
    login(state) {
        state.isAuthorized = true;
    },
};
export const store = createStore({ state, mutations });
