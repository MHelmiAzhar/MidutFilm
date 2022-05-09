import { Card, Container, Row, Col, Image } from "react-bootstrap";
import AntMan from "../assets/superhero/antman.jpg";
import Avenger from "../assets/superhero/avenegr.jpg";
import batman from "../assets/superhero/batman.jpg";
import captAmerica from "../assets/superhero/CapAmerica.jpg";
import superman from "../assets/superhero/Superman.jpg";
import thor from "../assets/superhero/thor.jpg";
const SuperHero = () => {
  const dataTrending = [
    {
      image: AntMan,
      title: "ANT Man",
      desc: "Its Okay To Not Be Okay mengisahkan tentang orang-orang yang haus cinta dan kasih sayang namun mengalami trauma dalam hidupnya. Kemudian saling bertemu dan menumbuhkan rasa satu sama lain dan berakhir dengan saling dukung serta saling cinta.",
    },
    {
      image: Avenger,
      title: "The Avengers",
      desc: "Peaky Blinders adalah serial tentang keluarga gangster berlatar di Birmingham, Inggris tahun 1919. Mereka mengisahkan masa-masa setelah Perang Dunia Pertama meledak.",
    },
    {
      image: batman,
      title: "Batman",
      desc: "Spiderman No Way Home mengisahkan tentang kegelisahan Peter Parker yang diperankan Tom Holland karena difitnah. Mysterio, yang diperankan oleh Jake Gyllenhaal adalah orang yang memfitnah Parker dan akhirnya mati terlebih dahulu sebelum masalah bisa diselesaikan.",
    },
    {
      image: captAmerica,
      title: "Captain America",
      desc: "SpongeBob SquarePants mengambil cuti dari kota Bikini Bottom untuk melacak mahkota Raja Neptunus yang dicuri.",
    },
    {
      image: superman,
      title: "Superman : Man of Steel",
      desc: "Doctor Strange 2 mengisahkan perjuangan Stephen Strange (Benedict Cumberbatch) menghadapi berbagai kejadian aneh akibat pintu lintas semesta yang terbuka pasca kejadian di Spider-Man No Way Home.",
    },
    {
      image: thor,
      title: "Thor",
      desc: "mengisahkan kejadian mistis di luar logika yang menimpa enam mahasiswa kala kuliah kerja nyata (KKN) di desa terpencil.",
    },
  ];
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="Superhero">
          Superhero Movie
        </h1>
        <br />
        <Row className>
          {dataTrending.map((superhero, index) => (
            <Col md={4}>
              <div className="card">
                <Card className="bg-dark text-white card">
                  <Image src={superhero.image} alt="ItsOk" className="img" />
                  <Card.Title className="text-center p-2">{superhero.title}</Card.Title>
                  <Card.Text className="text-left p-2 desc">{superhero.desc}</Card.Text>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
