import React from 'react';
import { Navbar, Container, Row, Col, Card, Image } from 'react-bootstrap';
import '../styles.css';

const AboutUs = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' sticky>
        <Navbar.Brand>Sample Navbar</Navbar.Brand>
      </Navbar>
      <Container>
        <div className='mt-4'>
          <Row className='headingText1 mb-4'>Credenz Tech Days</Row>
          <Row style={{ justifyContent: 'center' }}>
            <Card style={{ width: '37rem', borderColor: 'white' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              itaque quis voluptatibus, dolorem unde perspiciatis adipisci
              ratione aliquam beatae tempora mollitia rerum saepe similique
              laudantium illo cum ab corrupti? Nemo!
            </Card>
          </Row>
        </div>
        <div className='mt-5'>
          <Row>
            <Col md={6} className='d-flex justify-content-start'>
              <Image rounded src='https://source.unsplash.com/random/450x250' />
            </Col>
            <Col md={6} className='align-self-center'>
              <Card style={{ width: '37rem', borderColor: 'white' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus itaque quis voluptatibus, dolorem unde perspiciatis
                adipisci ratione aliquam beatae tempora mollitia rerum saepe
                similique laudantium illo cum ab corrupti? Nemo!
              </Card>
            </Col>
          </Row>
        </div>
        <div className='my-5'>
          <Row>
            <Col md={6} className='align-self-center'>
              <Card style={{ width: '37rem', borderColor: 'white' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus itaque quis voluptatibus, dolorem unde perspiciatis
                adipisci ratione aliquam beatae tempora mollitia rerum saepe
                similique laudantium illo cum ab corrupti? Nemo!
              </Card>
            </Col>
            <Col md={6} className='d-flex justify-content-end '>
              <Image rounded src='https://source.unsplash.com/random/450x250' />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
