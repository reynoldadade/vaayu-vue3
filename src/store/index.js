import { createStore as vuexCreateStore } from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import state from "./state";

const storeConfiguration = {
  state,
  getters,
  mutations,
  actions,
};

const defaultOverrides = {
  state: () => {
    return {};
  },
};

function makeState(initialState, overrideState) {
  return {
    ...(typeof initialState === "function" ? initialState() : initialState),
    ...overrideState(),
  };
}

export function createStore(storeOverrides = defaultOverrides) {
  return vuexCreateStore({
    ...storeConfiguration,
    ...storeOverrides,
    ...{
      state: makeState(storeConfiguration.state, storeOverrides.state),
    },
  });
}

export default createStore();
