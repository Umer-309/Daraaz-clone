import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from '../supabase';
import { Category, Product } from "../faker";

interface ProductData {
    products: Product[],
    categories: Category[],
}

const fetchProducts = createAsyncThunk<ProductData, void>('Products/fetchProducts', async () => {
    try {
        const { data: products, error: productError } = await supabase
            .from('products')
            .select('*');

        const { data: categories, error: categoriesError } = await supabase
            .from('categories')
            .select('*')

        if (productError) {
            throw productError;
        }
        if (categoriesError) {
            throw categoriesError;
        }

        return { products, categories };
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
});

const fetchProductById = createAsyncThunk<Product, void>('Products/fetchProductById', async (id) => {
    try {
        const { data: product, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single();
  
        if (error) {
          throw error;
        }
        return product;
    } catch (error) {
      return error.message;
    }
});

const initialState = {
    products: [],
    categories: [],
    loading: false,
    error: null,
    count: 1,
    currentProduct: {},
    shoppingCart: localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : []
};

const ProductSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        setCurrentProduct: (state, action) => {
            const { id } = action.payload;
            fetchProductById(id)
            state.currentProduct = state.products.filter(product => product.userId === id)
        },
        setCount: (state, action) => {
            state.count = action.payload;
        },
        setCart: (state, action) => {
            const { productId, quantity } = action.payload;
            fetchProducts();
            const updatedCart = [...state.shoppingCart, { productId, quantity }];
            localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
            state.shoppingCart = updatedCart;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'success';
                state.products = action.payload.products;
                state.categories = action.payload.categories;
                state.loading = false;
            })
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                console.error('Error fetching products:', action.error);
                state.status = 'failed';
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export const { setCurrentProduct, setCount, setCart } = ProductSlice.actions;

export { fetchProducts, fetchProductById };

export default ProductSlice.reducer;
