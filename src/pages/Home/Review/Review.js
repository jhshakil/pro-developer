import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = ({ review }) => {
    const { name, picture, rating, details } = review;
    return (
        <Col sm={1} lg={4}>
            <Card className='w-100'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>rating : {rating}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;