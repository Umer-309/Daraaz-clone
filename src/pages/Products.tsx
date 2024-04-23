import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    Container,
    Grid,
    Paper,
    Rating,
    Typography,
} from "@mui/material";
import { fetchProducts, setCurrentProduct } from '../products/reducers'
import "./Products.css";


export default function Product() {
    const dispatch = useDispatch();
    const { products, categories, loading, error } = useSelector((state: any) => state.product);

    const location = useLocation()
    const searchString = location.search;
    const searchArr = searchString.split(/[^a-zA-Z0-9]+/).filter(Boolean)
    const searched = searchArr.join(' ');
    console.log(products)


    const productsCopy = [...products];

    productsCopy.sort((a, b) => a.price - b.price);
    React.useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    const searchItems = productsCopy
        .filter(product => product.name.includes(searched))
        .map(product => (
            <Grid
                item
                xs={2}
                key={product.userId}
            >
                <Link to={product.userId}>

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
                categories.map(category => (
                    <Box key={category.id}>
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
                                productsCopy
                                    .filter(product => product.catagory === category.name)
                                    .map(product => (
                                        <Grid
                                            item
                                            xs={2}
                                            key={product.userId}
                                        >
                                            <Link to={product.userId} onClick={() => dispatch(setCurrentProduct({ id: product.userId }))}>

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

