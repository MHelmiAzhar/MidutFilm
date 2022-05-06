import { Container, Row, Col, Button } from "react-bootstrap";
const Intro = () => {
  return (
    <div className=" intro">
      <Container className="text-black d-flex justify-content-center align-items-center text-center ">
        <Row>
          <Col>
            <div className="title mt-2">Tempat Nonton Orang-orang Miskin</div>
            <div className="introButton text-center mt-2">
              <Button variant="dark">Lihat Semua</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
