import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { BoldText, StyledTableCell } from './styles';
import Coupon from '../../components/feature/Coupon';
import Checkout from '../../components/checkout/Checkout';
import { useGetAllProductsQuery } from '../../app/products/reducers';

export interface CartItem {
    productId: string;
    price: number;
    total: number;
    quantity: number;
    rating: number;
    name: string;
}


interface HeadCell {
    disablePadding: boolean;
    id: keyof CartItem;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Products',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
    {
        id: 'rating',
        numeric: true,
        disablePadding: false,
        label: 'Rating',
    },
    {
        id: 'quantity',
        numeric: true,
        disablePadding: false,
        label: 'Quantity',
    },
    {
        id: 'total',
        numeric: true,
        disablePadding: false,
        label: 'Total',
    },
];

function EnhancedTableHead() {

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">

                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


export function Cart() {
    const dispatch = useDispatch();
    const selector = useSelector((state: any) => state.product.shoppingCart);
    const { data: products, error, isLoading } = useGetAllProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error?.message}</div>;

    const cart = selector?.map((item) => {
        const product = products?.find((product) => product.userId === item.productId);
        return product ? { ...product, quantity: item.quantity } : null;
    });
    console.log(cart)
    const total = cart.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0);

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead />
                        <TableBody>
                            {cart.map((item, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        tabIndex={-1}
                                        key={item?.userId}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <StyledTableCell padding="checkbox">
                                            <img src={item?.image} alt={item?.name} />
                                        </StyledTableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {item.name}
                                        </TableCell>
                                        <TableCell align="right">Rs. {item?.price}</TableCell>
                                        <TableCell align="right">{item?.rating}</TableCell>
                                        <TableCell align="right">{item?.quantity}</TableCell>
                                        <TableCell align="right">{item?.price * item?.quantity}</TableCell>
                                    </TableRow>
                                );
                            })}
                            <TableRow
                                hover
                                tabIndex={-1}
                                sx={{ cursor: 'pointer' }}
                            >
                                <StyledTableCell padding="checkbox">
                                </StyledTableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align='right'
                                    padding='none'

                                >
                                    <BoldText>Total</BoldText>
                                </TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right">{total}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Coupon />

                    <Checkout />
                </TableContainer>
            </Paper>
        </Box>
    );
}
