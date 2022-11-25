import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card, Col, Row } from "antd";

const BooksApi = () => {
  const { Meta } = Card;
  const [data, setData] = useState([]);
  const getBookDetails = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=217fbef692a24084aad0989314942b7b"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.articles, "artciels");
        setData(json.articles);
      });
  };
  return (
    <BooksApiDiv>
      <div className="btn-section">
        <Button type="primary" onClick={getBookDetails}>
          View News
        </Button>
      </div>
      <div className="card-section">
        <Row gutter={16}>
          {data.map((abc) => (
            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="example" src={abc.urlToImage} />}
              >
                <Meta title={abc.title} description={abc.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </BooksApiDiv>
  );
};

export default BooksApi;
export const BooksApiDiv = styled.div`
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
