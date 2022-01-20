import React from 'react';
import { useStateValue } from '../../../Hooks/StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, title, image, price }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt="" />

            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket} className='sign-Btn'>Remove From Basket</button>
            </div>

        </div>
    );
};

export default CheckoutProduct;