import {createStore} from "redux";

import rootReducerfrom from "./reducers/index";

const store = createStore(rootReducerfrom);

export default store;