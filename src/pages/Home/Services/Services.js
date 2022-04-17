import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center m-5 fs-1 fw-bold'>Services</h2>
            <div>
                <Container>
                    <Row className="gap-3 m-auto">
                        {
                            service.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Services;