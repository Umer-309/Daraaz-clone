import { Container } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom"


export default function Layout() {
    return (
        <>
            <Header />
            <Container maxWidth="sm">
                <Outlet />
            </Container>
        </>
    )
}