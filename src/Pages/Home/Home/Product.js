import { Rating } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useStateValue } from '../../../Hooks/StateProvider';
import './Product.css';
const Product = ({ id, title, price, image }) => {
    const [value, setValue] = React.useState(4);

    const [{ basket }, dispatch] = useStateValue();


    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
            },
        });
    };
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    <Box>
                        <Rating name="read-only" value={value} readOnly />
                    </Box>
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket} className='sign-Btn'>Add To Basket</button>
        </div>
    );
};

export default Product;