import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import authReducer from "../modules/admin/pages/Auth/authSlice";
import { authApi } from "../modules/admin/pages/Auth/adminApi";
import { rootApi } from "./rootApi";

const reducers = combineReducers({
	auth: authReducer,
	[authApi.reducerPath]: authApi.reducer,
	[rootApi.reducerPath]: rootApi.reducer,
});

// store user details in localStorage
const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(authApi.middleware),
});
