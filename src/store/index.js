import {createStore} from 'vuex'

const state = {
    isAuthorized: false,
};

const mutations = {
    login(state) {
        state.isAuthorized = true;
    },
};

const getters = {
    getIfUserIsAuthorized() {
        return state.isAuthorized;
    },
};
export const store = createStore({ state, mutations, getters});
