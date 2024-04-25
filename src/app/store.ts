import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import CouponReducer from './coupon';
import { categoriesApi, productsApi } from "./products/reducers";

export const store = configureStore({
    reducer: {
        coupon: CouponReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger, productsApi.middleware, categoriesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;