import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from 'redux-persist/lib/storage/session'
import loaderReducer from "./slices/loaderSlice"
import coordinatesReducer from "./slices/coordinatesSlice"

const rootReducer = combineReducers({
  coordinates: coordinatesReducer,
});

const config = {
  key: "root",
  version: 1,
  storage: storage,
};

const persistedReducer = persistReducer(
  config,
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

console.log("store: ", store)

const persistor = persistStore(store)

export {persistor}
export default store
