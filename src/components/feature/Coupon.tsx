import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { coupons } from '../../faker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setCoupon } from '../../app/coupon/reducers';

export default function Coupon() {
    const [inputCoupon, setInputCoupon] = React.useState(''); 
    const dispatch = useDispatch();
    const validCoupon = useSelector((state: RootState) => state.coupon);
console.log(validCoupon)
    const applyCoupon = () => {
        const appliedCoupon = coupons.find(c => c.code === inputCoupon);
        
        if (appliedCoupon) {
            dispatch(setCoupon(appliedCoupon.discountAmount));
        } else {
            console.log('Invalid coupon code');
        }
    };

    return (
    <Box>
    
        <Box
        sx={{display:'flex',gap:'10px', flexDirection:'column', maxWidth: '250px', marginLeft: 'auto'}}>
            <TextField
                label="Coupon"
                variant="outlined"
                value={inputCoupon}
                onChange={(e) => setInputCoupon(e.target.value)}
            />
            <Button onClick={applyCoupon}>Apply</Button>
        </Box>
    </Box>
    );
}
