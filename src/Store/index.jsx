import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { authReducer } from "./Auth";
import storage from "redux-persist-indexeddb-storage";
import { postsReducer } from "./Post";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postsReducer,
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
