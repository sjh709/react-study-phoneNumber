import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
  return (
    <div>
      <h1 className='title'>Phone Book</h1>
      <Container className='wrapper'>
        <Row>
          <Col className='border-right padding-right'>
            <ContactForm />
          </Col>
          <Col className='padding-left'>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
