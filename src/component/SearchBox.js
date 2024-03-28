import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEARCH_NAME',
      payload: { keyword: event.target[0].value },
    });
  };

  return (
    <Form onSubmit={searchByName}>
      <Row className='search-box'>
        <Col lg={10}>
          <Form.Control type='text' placeholder='name' />
        </Col>
        <Col lg={2}>
          <Button variant='primary' type='submit'>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
