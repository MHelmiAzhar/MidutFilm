import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import ItsOK from "../assets/film/film1.jpg";
import PeakyBlinder from "../assets/film/film2.jpg";
import Spiderman from "../assets/film/film3.jpg";
import Spongebob from "../assets/film/film4.jpg";
import DoctorStrange from "../assets/film/film5.jpg";
import KKN from "../assets/film/film6.jpg";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="Trending">
          Trending FIlm
        </h1>
        <br />
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} key={index}>
                <div className="card">
                  <Card className="bg-dark text-white card">
                    <Image src={`${process.env.REACT_APP_IMG_PATH}/${result.poster_path}`} alt="ItsOk" className="img" />
                    <Card.Title className="text-center p-2">{result.title}</Card.Title>
                    <Card.Title className="text-center">{result.release_date}</Card.Title>
                    <Card.Text className="text-left p-2 desc">{result.overview}</Card.Text>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
