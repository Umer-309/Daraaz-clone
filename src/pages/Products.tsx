import { Box, Grid, Paper, Rating, ThemeProvider, Typography, createTheme } from "@mui/material";
// Assuming you have defined types for products and categories
import { products, categories } from "../faker";

import "./Products.css";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: "12px"
                    },
                },
            ]
        }
    }
});

export default function Product() {    
    products.sort((a, b) => a.price - b.price);

    return (
        <ThemeProvider theme={theme}>
            {categories.map(category => (
                <Box key={category.id}>
                    <Typography component="h3" variant="h5" sx={{my: 5, borderBottom:"1px solid #000"}}>{category.name}</Typography>
                    <Grid container spacing={1}>
                        {products
                            .filter(product => product.catagory === category.name)
                            .map(product => (
                                <Grid item xs={3} key={product.userId}>
                                    <Link to={product.userId}>
                                        <Paper className="product-single">
                                            <img src={product.image} alt={product.name} />
                                            <Box>
                                                <Typography component="h2" variant="body2">
                                                    {product.name}
                                                </Typography>
                                                <Typography component="h3" variant="body1">Rs.{product.price}</Typography>
                                                <Box sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px"
                                                }}>
                                                    <Rating readOnly value={3.7} name="read-only" precision={0.5} size="small" />
                                                    <Typography component="p" variant="body3">(123)</Typography>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Link>
                                </Grid>
                            ))}
                    </Grid>
                </Box>
            ))}
        </ThemeProvider>
    );
}
