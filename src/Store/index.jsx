import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { authReducer } from "./Auth";
// import rootReducer from "./reducers";
import storage from "redux-persist-indexeddb-storage";

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage: storage("myDB"),
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
