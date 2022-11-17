import { createStore } from "redux";
import activityReducer from "./activityReducer";


const store = createStore(activityReducer);

export default store