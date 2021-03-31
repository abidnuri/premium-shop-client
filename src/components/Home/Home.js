import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FakeData from '../FakeData/FakeData'
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(FakeData);
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