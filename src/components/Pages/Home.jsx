import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={8}>
                    <img
                        src="public/noble-house-outdoor-dining-chairs-12407-64_1000.webp"
                        alt="big"
                        className="img-fluid rounded shadow-lg"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Col>
                <Col xs={12} md={4} className="d-flex flex-column justify-content-between">
                    <img
                        src='public/Outdoor_Living_Small_Banner_r1.jpg'
                        alt='small1'
                        className="img-fluid mb-3 rounded shadow-sm"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <img
                        src="public/Home_Decor_Small_Banner_r1.jpg"
                        alt="small2"
                        className="img-fluid rounded shadow-sm"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
