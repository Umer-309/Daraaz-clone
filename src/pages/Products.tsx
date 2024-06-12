import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    Box,
    Container,
    Grid,
    Paper,
    Rating,
    Typography,
} from "@mui/material";
import { useGetAllProductsQuery, useGetAllCategoriesQuery } from '../app/products/reducers'
import "./Products.css";


export default function Product() {
    const dispatch = useDispatch();
    const { data: products, error, isLoading } = useGetAllProductsQuery();
    const { data: categories } = useGetAllCategoriesQuery();


    const location = useLocation()
    const searchString = location.search;
    const searchArr = searchString.split(/[^a-zA-Z0-9]+/).filter(Boolean)
    const searched = searchArr.join(' ');


    const sortedProducts = React.useMemo(() => {
        if (!products || !Array.isArray(products)) return [];
        return [...products].sort((a, b) => {
            const priceA = a.price || 0;
            const priceB = b.price || 0;
            return priceA - priceB;
        });
    }, [products]);
    if (error) return <div>{error}</div>
    if (isLoading) return <div>Loading...</div>
    const searchItems = sortedProducts
        ?.filter(product => product.name.includes(searched))
        .map(product => (
            <Grid
                item
                xs={2}
                key={product.userId}
            >
                <Link to={`products/${product.userId}`}
                >

                    <Paper className="product-single">
                        <img src={product.image} alt={product.name} />
                        <Box>
                            <Typography component="h2" variant="body2">
                                {product.name}
                            </Typography>
                            <Typography
                                component="h3"
                                variant="body1"
                            >
                                Rs.{product.price}
                            </Typography>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}>
                                <Rating
                                    readOnly
                                    value={product.rating}
                                    name="read-only"
                                    precision={0.5}
                                    size="small"
                                />
                                <Typography
                                    component="p"
                                    variant="body1"
                                    sx={{ fontSize: "12px" }}
                                >
                                    ({product.reviews})
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Link>
            </Grid>
        ))




    return (

        <Container maxWidth="xl">
            {
                searched ? (
                    <><Typography
                        component="h3"
                        variant="h5"
                        sx={{
                            my: 5,
                            borderBottom: "1px solid #000"
                        }}
                    >
                        Your Search Results
                    </Typography>
                        <Grid container spacing={1}>
                            {searchItems ? searchItems : "No Result Found"}
                        </Grid>
                    </>
                ) : null
            }
            {
                categories?.map((category) => (
                    <Box key={category.userId}>
                        <Typography
                            component="h3"
                            variant="h5"
                            sx={{
                                my: 5,
                                borderBottom: "1px solid #000"
                            }}
                        >
                            {category.name}
                        </Typography>
                        <Grid container spacing={1}>
                            {
                                products
                                    ?.filter(product => product.catagory === category.name)
                                    .map(product => (
                                        <Grid
                                            item
                                            xs={2}
                                            key={product.userId}
                                        >
                                            <Link to={`products/${product.userId}`} >

                                                <Paper className="product-single">
                                                    <img src={product.image} alt={product.name} />
                                                    <Box>
                                                        <Typography component="h2" variant="body2">
                                                            {product.name}
                                                        </Typography>
                                                        <Typography
                                                            component="h3"
                                                            variant="body1"
                                                        >
                                                            Rs.{product.price}
                                                        </Typography>
                                                        <Box sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px"
                                                        }}>
                                                            <Rating
                                                                readOnly
                                                                value={product.rating}
                                                                name="read-only"
                                                                precision={0.5}
                                                                size="small"
                                                            />
                                                            <Typography
                                                                component="p"
                                                                variant="body1"
                                                                sx={{ fontSize: "12px" }}
                                                            >
                                                                ({product.reviews})
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Link>
                                        </Grid>
                                    ))}
                        </Grid>
                    </Box>
                ))}
        </Container>
    );
}

