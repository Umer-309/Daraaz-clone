import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    coupon: null
}

const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {
        setCoupon: (state, action) => {
            state.coupon = action.payload;
        }
    }
});

export const {setCoupon} = couponSlice.actions;
export default couponSlice.reducer;