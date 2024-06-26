import './Header.css';
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { products } from '../faker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Container } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';


const theme = createTheme({
    components: {
        MuiAutocomplete: {
            styleOverrides: {
                inputRoot: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                },
                input: {
                    '&::placeholder': {
                        color: 'white',
                    },
                },
            },
        },
    },
});



const top100Films = products.map(product => ({ name: product.name }));

export default function Header() {
    const count = useSelector((state: any) => state.product.shoppingCart ? state.product.shoppingCart.length : 0)
    const [search, setSearch] = React.useState<string | null>("");
    const [inputValue, setInputValue] = React.useState('');
    const [_searchParams, setSearchparams] = useSearchParams()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link to="/cart">
                    <IconButton
                        size="large"
                        aria-label="shopping cart"
                        color="inherit"
                    >
                        <Badge badgeContent={count} color="error">
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Link>
                <p>Cart</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )

    function handleChange(event: any, value: typeof search) {
        setSearch(value)
        setInputValue(value || "")

        if (event && event.key !== null && event.key === "Enter") {
            if (value !== null) {
                setSearchparams(value);
            }
        }
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }} className="header">
                <Container maxWidth="xl" >
                    <AppBar position='relative' sx={{ bgcolor: "#F85606" }}>
                        <Toolbar sx={{ gap: 5 }}>

                            <Link to="/">
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{
                                        display: {
                                            xs: 'none', sm: 'block'
                                        }
                                    }}
                                >
                                    Daraaz
                                </Typography>
                            </Link>
                            <ThemeProvider theme={theme}>
                                <Autocomplete
                                    id="highlights-demo"
                                    onInputChange={handleChange}
                                    inputValue={inputValue}
                                    sx={{
                                        width: "60%"
                                    }}
                                    options={top100Films}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Search In Daraaz" margin="normal" />
                                    )}
                                    renderOption={(props, option, { inputValue }) => {
                                        const matches = match(option.name, inputValue, { insideWords: true });
                                        const parts = parse(option.name, matches);
                                        return (
                                            <li {...props}>
                                                <div>
                                                    {parts.map((part, index) => (
                                                        <span
                                                            key={index}
                                                            style={{
                                                                fontWeight: part.highlight ? 700 : 400,
                                                            }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </div>
                                            </li>
                                        );
                                    }}
                                />
                            </ThemeProvider>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Link to="/cart">
                                    <IconButton
                                        size="large"
                                        aria-label="shopping cart"
                                        color="inherit"
                                    >
                                        <Badge badgeContent={count} color="error">
                                            <AddShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                </Link>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Container>
                {renderMobileMenu}
                {renderMenu}
            </Box>
        </>
    )
}