import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    backgroundColor: '#F85606',
    borderRadius: '4px',
    padding: '10px'
}))