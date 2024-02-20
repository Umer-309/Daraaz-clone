import React from "react";
import { useParams } from "react-router-dom";
import { products, Product } from "../faker";
import { Box, Container, Grid, Rating, Typography } from "@mui/material";


export default function ProductDetails() {
    const [currentProduct, setCurrentProduct] = React.useState(null)
    let { id } = useParams();


    let current: Product[] = products.filter(product => {
        if (product.userId == id) {
            return {
                ...product
            }
        }
    })
    React.useEffect(() => {
        setCurrentProduct(...current)
    }
        , [id])

    if (currentProduct) {
        return (
          
            
                <Container sx={{ bgcolor: "#fff" }} maxWidth="xl">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <img width="100%" src={currentProduct.image} alt="" />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h5" component="h1">{currentProduct.description}</Typography>
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center"
                                }} gap={1}>
                                    <Rating readOnly value={currentProduct.rating} name="read-only" precision={0.5} size="small" />
                                    <Typography component="p" variant="body3">{currentProduct.reviews} ratings</Typography>
                                </Box>
                                <hr />
                                <Typography variant="h5" component="p" sx={{color: "red"}}>Rs. {currentProduct.price}</Typography>
                            </Grid>
                            <Grid item xs={2}>

                            </Grid>
                        </Grid>
                    </Box>


                </Container>
                   
                
        )
    }
}