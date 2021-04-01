import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [])
    return (
        <Container>
            <Row className="mx-auto">
                {
                    products.map(pd => <SingleProduct key={pd.id} pd={pd} />)
                }
            </Row>
        </Container>
    );
};

export default Home;