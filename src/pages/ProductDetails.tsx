import React from "react";
import { useParams } from "react-router-dom";
import { products, Product } from "../faker";
import { Box, Button, ButtonGroup, Container, Grid, Input, OutlinedInput, Rating, Typography } from "@mui/material";


export default function ProductDetails() {
    const [currentProduct, setCurrentProduct] = React.useState(null)
    const [count, setCount] = React.useState(1)
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
        setCount(1)
    }
        , [id])


    const handleDecrement = () => {
        setCount(prevCount => prevCount > 1 ? prevCount - 1 : prevCount)
    }
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }
    const handleCart = () => {
        alert(`Added ${count} ${currentProduct.name} to the cart`)
    }
    if (currentProduct) {
        return (


            <Container sx={{ bgcolor: "#fff" }} maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sx={{alignItems:"center", justifyContent:"center", display:"flex"}}>
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
                            <Typography variant="h5" component="p" sx={{ color: "red", mt:3 }}>Rs. {currentProduct.price}</Typography>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                mt:3
                            }}>
                                <Typography variant="body2" component="p">Quantity</Typography>
                                <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Button
        variant="text"
        onClick={handleDecrement}
        sx={{ height: "100%", minWidth: 0, px:2 }}
      >
        -
      </Button>
      <Input
        inputComponent="input"
        type="text"
        value={count}
        sx={{
          maxWidth: "20%",
          px:2,
          position: "unset",
          border: "none",
          outline: "none",
          "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "-moz-appearance": "textfield", /* Hide spinner arrows in Firefox */
        }}
      />
      <Button
        variant="text"
        onClick={handleIncrement}
        sx={{ height: "100%", minWidth: 0, px:2 }}
      >
        +
      </Button>
    </Box>
                            </Box>
                            <ButtonGroup variant="contained" sx={{ gap: 2, boxShadow:"none", my:3 }} fullWidth aria-label="Basic button group">
                                <Button>Buy</Button>
                                <Button sx={{
                                    bgcolor: "#f85606",
                                    borderRadius: "0px", 
                                    color: "#fff"
                                }}
                                    onClick={handleCart}>Add to cart</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item xs={2}>

                        </Grid>
                    </Grid>
                </Box>


            </Container>


        )
    }
}