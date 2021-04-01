import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const SingleProduct = (props) => {
    const { id, name, imageURL, price, weight } = props.pd;
    return (
        <Col md={4} className="p-3">
            <Card className="p-5">
                <Card.Img variant="top" src={imageURL} />
                <Card.Body className="text-center">
                    <Card.Title className="font-weight-bold">{name}-{weight}gm</Card.Title>
                    <span className="font-weight-bold h4">Price: ${price}</span>
                    <Button as={Link} to={`products/${id}`} variant="dark">Buy Now <FontAwesomeIcon icon={faShoppingBag} /></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProduct;