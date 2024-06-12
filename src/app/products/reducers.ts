import { createSlice } from "@reduxjs/toolkit";
import { supabase } from '../../supabase';
import { Category, Product } from "../../faker";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

interface ProductData {
    products: Product[],
    categories: Category[],
}


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product[], void>({
            queryFn: async () => {
                const { data, error } = await supabase.from('products').select('*');
                if (error) {
                    return { error };
                }
                return { data };
            },
        }),
        getProductById: builder.query({
            queryFn: async (id) => {
                const { data, error } = await supabase
                    .from('products')
                    .select('*')
                    .eq('userId', id)
                    .single();
                if (error) {
                    return { error: { status: 'API_ERROR', message: error.message } };
                }
                return { data };
            },
        }),
    })
});



export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            queryFn: async () => {
                const { data, error } = await supabase.from('categories').select('*');
                if (error) {
                    return { error };
                }
                return { data };
            },
        }),
    })
});

const initialState = {
    products: [],
    categories: [],
    loading: false,
    error: null,
    count: 1,
    shoppingCart: localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : []
};
const ProductSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        setCount: (state, action) => {
            console.log('Current count:', state.count, 'New count:', action.payload);
            state.count = action.payload;
        },
        setCart: (state, action) => {
            const { productId, quantity } = action.payload;
            const index = state.shoppingCart.findIndex(item => item.productId === productId);

            if (index !== -1) {
                state.shoppingCart[index].quantity += quantity;
            } else {
                const updatedCart = [...state.shoppingCart, { productId, quantity }];
                state.shoppingCart = updatedCart;
            }
            localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
        }
    },
});

export const { setCount, setCart } = ProductSlice.actions;

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
export const { useGetAllCategoriesQuery } = categoriesApi;

export default ProductSlice.reducer;
