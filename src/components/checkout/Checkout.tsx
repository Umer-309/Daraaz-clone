import { Box } from "@mui/material";
import { StyledLink } from "./styles";

const Checkout = () => {
    return (
        <Box sx={{
            marginLeft: 'auto', paddingTop: '10px', display: 'flex',
            justifyContent: 'center'
        }}>
            <StyledLink to='/checkout'>
                Proceed to checkout
            </StyledLink>
        </Box>
    )
}

export default Checkout;