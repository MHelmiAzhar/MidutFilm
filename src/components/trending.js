import { Card, Container, Row, Col, Image } from "react-bootstrap";
import ItsOK from "../assets/film/film1.jpg";
import PeakyBlinder from "../assets/film/film2.jpg";
import Spiderman from "../assets/film/film3.jpg";
import Spongebob from "../assets/film/film4.jpg";
import DoctorStrange from "../assets/film/film5.jpg";
import KKN from "../assets/film/film6.jpg";
const Trending = () => {
  const dataTrending = [
    {
      image: ItsOK,
      title: "It's Okay To Be Not Okay",
      desc: "Its Okay To Not Be Okay mengisahkan tentang orang-orang yang haus cinta dan kasih sayang namun mengalami trauma dalam hidupnya. Kemudian saling bertemu dan menumbuhkan rasa satu sama lain dan berakhir dengan saling dukung serta saling cinta.",
    },
    {
      image: PeakyBlinder,
      title: "Peaky Blidnder",
      desc: "Peaky Blinders adalah serial tentang keluarga gangster berlatar di Birmingham, Inggris tahun 1919. Mereka mengisahkan masa-masa setelah Perang Dunia Pertama meledak.",
    },
    {
      image: Spiderman,
      title: "Spiderman : No Way Home",
      desc: "Spiderman No Way Home mengisahkan tentang kegelisahan Peter Parker yang diperankan Tom Holland karena difitnah. Mysterio, yang diperankan oleh Jake Gyllenhaal adalah orang yang memfitnah Parker dan akhirnya mati terlebih dahulu sebelum masalah bisa diselesaikan.",
    },
    {
      image: Spongebob,
      title: "SpongeBob Squarepants the Movie",
      desc: "SpongeBob SquarePants mengambil cuti dari kota Bikini Bottom untuk melacak mahkota Raja Neptunus yang dicuri.",
    },
    {
      image: DoctorStrange,
      title: "Doctor Strange 2",
      desc: "Doctor Strange 2 mengisahkan perjuangan Stephen Strange (Benedict Cumberbatch) menghadapi berbagai kejadian aneh akibat pintu lintas semesta yang terbuka pasca kejadian di Spider-Man No Way Home.",
    },
    {
      image: KKN,
      title: "KKN di Desa Penari",
      desc: "mengisahkan kejadian mistis di luar logika yang menimpa enam mahasiswa kala kuliah kerja nyata (KKN) di desa terpencil.",
    },
  ];
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="Trending">
          Trending FIlm
        </h1>
        <br />
        <Row className>
          {dataTrending.map((trending, index) => (
            <Col md={4}>
              <div className="card">
                <Card className="bg-dark text-white card">
                  <Image src={trending.image} alt="ItsOk" className="img" />
                  <Card.Title className="text-center p-2">{trending.title}</Card.Title>
                  <Card.Text className="text-left p-2 desc">{trending.desc}</Card.Text>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
