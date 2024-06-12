import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Wrapper } from "./styles";
import { useGetAllProductsQuery } from "../../app/products/reducers";
import { CartItem } from "../cart/Cart";

const Checkout = () => {
    const cart = useSelector((state: RootState) => state.product.shoppingCart);
    const discAmount = useSelector(state => state?.coupon);
    const { data: products, error, isLoading } = useGetAllProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const finalCart = cart.map((item) => {
        const product = products?.find((product) => product.userId === item.productId);
        return product ? {
            ...product,
            quantity: item.quantity,
            total: product.price * item.quantity
        } : null;
    });
    const total = finalCart.reduce((total: number, item: CartItem) => total + item.total, 0);
    const discount = Math.ceil(total - (total - (total * (discAmount.coupon / 100))));
    const GST = Math.ceil((total * 18) / 100);
    const grandTotal = ((total - discount) + GST);

    return (
        <Wrapper>
            <Table sx={{ textWrap: 'nowrap' }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Sr. No</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Total Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {finalCart.map((item, index) => <TableRow key={index}>
                        <TableCell>{index + 1 }</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.total}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
            <Table sx={{ maxWidth: '300px', marginLeft: 'auto' }}
                size="small">
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Total
                        </TableCell>
                        <TableCell>
                            {total}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            discount {discAmount.coupon}%
                        </TableCell>
                        <TableCell>
                            - {discount}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            G.S.T
                        </TableCell>
                        <TableCell>
                            + {GST}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Grand Total
                        </TableCell>
                        <TableCell>
                            = {grandTotal}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Wrapper>
    )
}

export default Checkout;