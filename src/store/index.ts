import { createStore } from 'vuex';

const store = createStore(
    {
        state() {
            return {
                isLoading: false
            }
        },
        mutations: {
            loading_state(state: { isLoading: boolean }) {
                state.isLoading = !state.isLoading;
            }
        }
    }
);

export default store;