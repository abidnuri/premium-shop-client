import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const SingleProduct = (props) => {
    const { id, name, img, price } = props.pd;
    return (
        <Col md={4} className="p-3">
            <Card className="p-5">
                <Card.Img variant="top" src={img} />
                <Card.Body className="text-center">
                    <Card.Title className="font-weight-bold">{name}</Card.Title>
                    <span className="font-weight-bold h4">Price:{price}</span>
                    <Button as={Link} to={`products/${id}`} variant="dark">Buy Now <FontAwesomeIcon icon={faShoppingBag} /></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProduct;