import { Modal, Container, Row, Col } from "react-bootstrap";

const DetailsModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      className="details-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h3>{props.eventName}</h3>
      </Modal.Header>
      <Container fluid>
        <Row>
          <Col lg={3} sm={3}>
            <img alt="Event LOGO" src={props.logo} />
          </Col>
          <Col lg={9} sm={9}>
            <h5 className="event-info">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </h5>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default DetailsModal;
