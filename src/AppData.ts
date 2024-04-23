import { supabase } from "./supabase";


const fetchProducts = async () => {
    try {
        let { data: products, error } = await supabase
            .from('products')
            .select('*')

        console.log(products)

        if (error) {
            throw error
        }
        return products

    } catch (error) {
        console.log(error)
    }
}

export async function getProducts(){
    return await fetchProducts()
} 
