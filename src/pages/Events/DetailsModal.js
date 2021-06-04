import { Modal, Button, Container, Row, Col } from "react-bootstrap";

const DetailsModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container fluid>
        <Row>
          <Col lg={3} sm={3}>
            <img alt="Event Logo" src={props.logo} />
          </Col>
          <Col lg={9} sm={9}>
            <h5 className="mt-5">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </h5>
          </Col>
        </Row>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default DetailsModal;
