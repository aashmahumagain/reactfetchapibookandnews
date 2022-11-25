import React, { useState } from "react";
import styled from "styled-components";
import { Col, Row, Card, Button } from "antd";
const Novel = () => {
  const { Meta } = Card;
  const [books, setBooks] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d3ed261c75mshacb6c158aae266bp13a6f8jsn71f5511026c3",
      "X-RapidAPI-Host": "book4.p.rapidapi.com",
    },
  };
  const fetchapi = () => {
    fetch("https://book4.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((response) => setBooks(response.books));
  };

  return (
    <NovelSection>
      <div>
        <h1>Our Popular Books</h1>
      </div>
      <div className="btn-section">
        <Button type="primary" onClick={fetchapi}>
          Show Books
        </Button>
      </div>
      <div>
        <Row gutter={8}>
          {books.map((abc) => (
            <Col span={8}>
              <Card
                style={{
                  width: 300,
                }}
                hoverable
                cover={<img alt="example" src={abc.url} />}
              >
                <Meta description={abc.description} />
                <div>
                  <h2>Title: {abc.title}</h2>
                  <h3>Author: {abc.author}</h3>
                  <h3>Details: {abc.detail}</h3>
                  <h4>Price:{abc.price}</h4>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </NovelSection>
  );
};

export default Novel;
const NovelSection = styled.div`
  h1 {
    text-align: center;
    font-weight: bold;
  }
  .btn-section {
    display: flex;
    justify-content: center;
  }
  button {
    font-size: 18px;
    margin: 10px;
    width: auto;
    height: 50px;
    border-radius: 10px;
  }
`;
