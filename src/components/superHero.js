import { Card, Container, Row, Col, Image } from "react-bootstrap";
import AntMan from "../assets/superhero/antman.jpg";
import Avenger from "../assets/superhero/avenegr.jpg";
import batman from "../assets/superhero/batman.jpg";
import captAmerica from "../assets/superhero/CapAmerica.jpg";
import superman from "../assets/superhero/Superman.jpg";
import thor from "../assets/superhero/thor.jpg";
const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="Superhero">
          Superhero Movie
        </h1>
        <br />
        <Row className>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={AntMan} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">ANT Man</Card.Title>
                <Card.Text className="text-left p-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={Avenger} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">The Avengers</Card.Title>
                <Card.Text className="text-left p-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={batman} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">Batman</Card.Title>
                <Card.Text className="text-left p-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={captAmerica} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">Captain America</Card.Title>
                <Card.Text className="text-left p-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={superman} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">Superman : Man of Steel</Card.Title>
                <Card.Text className="text-left p-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <Card className="bg-dark text-white card">
                <Image src={thor} alt="ItsOk" className="img" />
                <Card.Title className="text-center p-2">Thor</Card.Title>
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

export default SuperHero;
