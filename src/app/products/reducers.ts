import { createSlice } from "@reduxjs/toolkit";
import { supabase } from '../../supabase';
import { Category, Product } from "../../faker";
import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ProductData {
    products: Product[],
    categories: Category[],
}

async function testSupabaseQuery() {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
        console.error('Error fetching products:', error);
    } else {
        console.log('Fetched products:', data);
    }
}

testSupabaseQuery();

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery:  fakeBaseQuery(),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            queryFn: async () => {
                const { data, error } = await supabase.from('products').select('*');
                console.log('Data:', data);
                console.log('Error:', error); 
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
                console.log('Data:', data);
                console.log('Error:', error); 
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
    baseQuery:  fakeBaseQuery(),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            queryFn: async () => {
                const { data, error } = await supabase.from('categories').select('*');
                console.log('Data:', data);
                console.log('Error:', error);
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
            state.count = action.payload;
        },
        setCart: (state, action) => {
            const { productId, quantity } = action.payload;
            const updatedCart = [...state.shoppingCart, { productId, quantity }];
            localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
            state.shoppingCart = updatedCart;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(productsApi.endpoints.getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data || [];
            })
            .addCase(productsApi.endpoints.getAllProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(productsApi.endpoints.getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(categoriesApi.endpoints.getAllCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload.data || [];
            })
            .addCase(categoriesApi.endpoints.getAllCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(categoriesApi.endpoints.getAllCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setCurrentProduct, setCount, setCart } = ProductSlice.actions;

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
export const { useGetAllCategoriesQuery } = categoriesApi;

export default ProductSlice.reducer;
