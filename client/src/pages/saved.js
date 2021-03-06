import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Search from "../pages/search";
import Result from "../components/Result";
// import Book from "../models/book";
// Still working on this page
function Saved(props) {
  const [book, setBook] = useState({})

  const {id} = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (

      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {book.title} by {book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {book.description}
              </p>
            </article>
          </Col>
        </Row>   <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <p>
                {book.image}
              </p>
            </article>
          </Col>
        </Row>   <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <p>
                {book.link}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Saved;