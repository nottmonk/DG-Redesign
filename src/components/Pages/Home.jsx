import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '/src/App.css';

const Home = () => {
    return (
        <Container>
            <Row className="align-items-center mb-5">
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
            <div className="divider">
                <h2 className='Shopdiv'><b>Shopping</b></h2>
            </div>
            <Row>
                <Col xs={12} md={3} className="mb-4">
                    <Link to="/food" className="category-link">
                        <div className="category-box">
                            <h3>Food</h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={3} className="mb-4">
                    <Link to="/household" className="category-link">
                        <div className="category-box">
                            <h3>HouseHold</h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={3} className="mb-4">
                    <Link to="/office-toys" className="category-link">
                        <div className="category-box">
                            <h3>Office & Toys</h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={3} className="mb-4">
                    <Link to="/pet" className="category-link">
                        <div className="category-box">
                            <h3>Pet</h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={3} className="mb-4">
                    <Link to="/beauty-health" className="category-link">
                        <div className="category-box">
                            <h3>Beauty & Health</h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={3} className="mb-4">
                    <Link to="/baby-apparel" className="category-link">
                        <div className="category-box">
                            <h3>Baby & Apparel</h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={3} className="mb-4">
                    <Link to="/auto-more" className="category-link">
                        <div className="category-box">
                            <h3>Auto & Outdoor</h3>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
