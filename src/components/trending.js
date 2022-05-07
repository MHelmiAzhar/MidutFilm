import { Card, Container, Row, Col, Image } from "react-bootstrap";
import ItsOK from "../assets/film/film1.jpg";
import PeakyBlinder from "../assets/film/film2.jpg";
import Spiderman from "../assets/film/film3.jpg";
import Spongebob from "../assets/film/film4.jpg";
import DoctorStrange from "../assets/film/film5.jpg";
import KKN from "../assets/film/film6.jpg";
const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="Trending">
          Trending FIlm
        </h1>
        <br />
        <Row className>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={ItsOK} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">It's Okay To Be Not Okay</Card.Title>
                <Card.Text className="text-left p-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={PeakyBlinder} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">Peaky Blinder</Card.Title>
                <Card.Text className="text-left p-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={Spiderman} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">Spiderman : No Way Home</Card.Title>
                <Card.Text className="text-left p-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={Spongebob} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">SpongeBob Squarepants the Movie</Card.Title>
                <Card.Text className="text-left p-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={DoctorStrange} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">Doctor Strange</Card.Title>
                <Card.Text className="text-left p-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={KKN} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">KKN di Desa Penari</Card.Title>
                <Card.Text className="text-left p-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
