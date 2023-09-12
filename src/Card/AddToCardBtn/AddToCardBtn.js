import React from 'react';
import useCardProducts from '../../Hooks/useCardProducts';

const AddToCardBtn = (props) => {
    const [cardDetails] = useCardProducts();
    const id = cardDetails.map(product => product._id)
    return (
        <button className='btn-all' onClick={() => props.addToCard(id)} > Add to Card </button>
    );
};

export default AddToCardBtn;