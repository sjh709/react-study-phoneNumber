import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = () => {
  return (
    <Row className='contact-item'>
      <Col lg={2}>
        <img
          className='contact-img'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
        />
      </Col>
      <Col lg={10}>
        <div className='name-style'>이름</div>
        <div>01012341234</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
