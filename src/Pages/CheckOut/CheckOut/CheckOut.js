import { ListItem } from '@mui/material';
import React from 'react';
import { useStateValue } from '../../../Hooks/StateProvider';
import './CheckOut.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const CheckOut = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout_form">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg"
                    alt="" />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket

                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            <div className="checout_right">

                <Subtotal />
            </div>
        </div>
    );
};

export default CheckOut;