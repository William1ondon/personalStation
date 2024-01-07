import Vuex from 'vuex';
import ModuleState from './modules/state';

const store = new Vuex.Store({
    modules: {
        mdState: ModuleState
    }
});

export default store;