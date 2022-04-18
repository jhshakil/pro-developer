import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('fakeReview.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center m-5 fs-1 fw-bold'>Student Review</h2>
            <div>
                <Container>
                    <Row className="m-auto">
                        {
                            review.map(review => <Review key={review.id} review={review}></Review>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Reviews;