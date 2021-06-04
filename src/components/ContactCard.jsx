import React from 'react';
import { Card } from 'react-bootstrap';
import CardImage from './CardImage';
import '../styles.css';
const ContactCard = ({ name, link1, link2, number }) => {
  return (
    <Card
      style={{
        width: '17rem',
        border: '0',
        backgroundColor: 'inherit',
      }}
    >
      <div className='custom-card-1'>
        <Card.Img variant='top' as={CardImage} />
        <div className='custom-card-cont'>
          <Card.Body>
            <Card.Title className='text-center card-title'>{name}</Card.Title>
            <Card.Text className='text-center'>
              <div className='card-text1 mb-2'>{link1}</div>
              <div className='card-contact'>{number}</div>
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default ContactCard;
