import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const LogsCard = ({ log }) => {
  const { id, book } = log;

  return (
    <Container>
      <Card>
        <Link to={`/logs/{$id}`}>More</Link>
        <h3>
          Book: {book.title}, {book.author}
        </h3>
      </Card>
    </Container>
  );
};

export default LogsCard;

const Card = styled.div`
  grid-template-rows: max-content 150px 1fr;
  border-radius: 5px;
  border: 5px solid pink;
  display: center;
  padding: 0.6em 1.2em;
  a {
    color: pink;
    font-family: arial;
    font-size: 100%;
  }
  font-family: arial;
  font-size: 120%;
`;

const Container = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
  padding-bottom: 50px;
  float: left;
  padding-right: 70px;
  padding-top: 70px;
`;
