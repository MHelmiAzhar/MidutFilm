import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
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
                    <Card.Text className="text-left p-2 desc">{result.popularity}</Card.Text>
                    <Card.Text className="text-left p-2 desc">{result.vote_average}</Card.Text>
                    <Card.Text className="text-left p-2 desc">{result.vote_count}</Card.Text>
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
