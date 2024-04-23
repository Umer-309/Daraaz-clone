import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import ProductReducer from '../products';
import CouponReducer from './coupon';

export const store = configureStore({
    reducer: {
        product: ProductReducer,
        coupon: CouponReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;