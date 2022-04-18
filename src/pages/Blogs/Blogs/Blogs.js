import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container className='mt-5'>
                <Row className="m-auto">
                    <Col sm={1} lg={6}>
                        <Card className='w-100'>
                            <Card.Body>
                                <Card.Title>Difference between authorization and authentication</Card.Title>
                                <Card.Text>
                                    Authentication : এটা verify করে user টা আসলে কে। এটা visible থাকে এবং চাইলে কিছুটা পরিবর্তন user নিজেই করতে পারে। এটা কাজ করে যখন কোন user কিছু information দিয়ে থাকে যেমন passwords বা pins।

                                    Authorization : এটা মূলত উনমুতি দিয়ে থাকে যে user কি কি access করতে পারবে। এটা করার জন্য আগে authentication করে নিতে হয়। এর কোন কিছু user চাইলে পরিবর্তন করতে পারবে না। এটা কাজ করে admin এর settings এর উপর অর্থাৎ admin কি কি জিনিস implement করেছে তার উপর।

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={1} lg={6}>
                        <Card className='w-100'>
                            <Card.Body>
                                <Card.Title>What other services does firebase provide other than authentication</Card.Title>
                                <Card.Text>
                                    Firebase authentication এর পাশাপাশি আরো অনেক service দিয়ে থাকে । তাদের service গুলো হচ্ছে : emulator suite , realtime database service, hosting service , storage service , cloud functions , security , extension ।
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;