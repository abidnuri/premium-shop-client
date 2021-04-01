import React from 'react';
import { useHistory, useParams } from 'react-router';

const ProductDetails = (props) => {
    const { productId } = useParams();
    const history = useHistory();
    return (
        <div>
            <h1>Product Details of {productId}</h1>
        </div>
    );
};

export default ProductDetails;