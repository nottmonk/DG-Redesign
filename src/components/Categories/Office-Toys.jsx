import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '/src/App.css';

const OfficeToys = ({ products }) => {
    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col xs={12} md={4} lg={3} key={product.id} className="mb-4">
                        <Card className="h-100">
                            <Card.Img
                                variant="top"
                                src={product.images[4]}
                                alt={product.title}
                                className="img-fluid"
                                style={{ maxHeight: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title className="text-truncate" title={product.title}>
                                    {product.title}
                                </Card.Title>
                                <Card.Text>
                                    ${product.price.toFixed(2)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default OfficeToys
