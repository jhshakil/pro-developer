import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, picture, balance, details } = service;
    const navigate = useNavigate()
    const checkoutPage = () => {
        navigate('/checkout')
    }
    return (
        <Col sm={1} lg={4}>
            <Card className='w-100'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>Price : {balance}</Card.Text>
                    <Button onClick={checkoutPage} variant="primary">Checkout Now</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;