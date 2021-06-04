import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <Container fluid>
        <Row>
          <Col lg={4} md={12} sm={12}>
            <p>© PICT IEEE Student Branch</p>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <p className='web-team-link'>
              Developed with ♥ by PISB &nbsp; <Link to='/team'>Web Team</Link>
            </p>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <a
              href='https://www.instagram.com/pisbcredenz/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-instagram  instagram'></i>
            </a>
            <a
              href='https://www.linkedin.com/company/pisbieee/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin-in  linkedin'></i>
            </a>
            <a
              href='https://www.facebook.com/pictieee/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-facebook-f  facebook'></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
