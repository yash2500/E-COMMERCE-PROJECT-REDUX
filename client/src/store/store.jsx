import { persistReducer, persistStore } from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productSaga from "../api/productSaga";
import rootReducer from "../reducer/rootReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'persist-store',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);
export const persistor = persistStore(store)
export default store;
