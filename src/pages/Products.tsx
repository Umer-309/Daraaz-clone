import {
    Box,
    Container,
    Grid,
    Paper,
    Rating,
    ThemeProvider,
    Typography,
    createTheme
} from "@mui/material";
import { products, categories } from "../faker";
import { Link, useLocation } from "react-router-dom";
import "./Products.css";


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
    const location = useLocation()
    products.sort((a, b) => a.price - b.price);
    // console.log(products);

    const searchString = location.search;
    const searchArr = searchString.split(/[^a-zA-Z0-9]+/).filter(Boolean)
    const searched = searchArr.join(' ');
    console.log(location);
    


    const searchItems = products
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
                                    variant="body3"
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
        <ThemeProvider theme={theme}>
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
                                    products
                                        .filter(product => product.catagory === category.name)
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
                                                                    variant="body3"
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
        </ThemeProvider>
    );
}
