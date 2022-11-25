import React from "react";
import { Col, Row } from "antd";
import first from "../../assets/mainpage.jpg";
import styled from "styled-components";
import { Button, Radio } from "antd";
const MainHome = () => {
  return (
    <div>
      <MainPage>
        <Row justify="space-between">
          <Col span={12}>
            <img src={first} />
          </Col>
          <Col span={12}>
            <p>
              Our faculties present educational process/ programs in a congenial
              manner. My college charges nominal fees as compared to other
              colleges in the city due to which students from all strata of
              society are able to study here.
            </p>
            <div className="btn-section">
              <Button className="btn-first" type="primary">
                About us
              </Button>
            </div>
          </Col>
        </Row>
      </MainPage>
    </div>
  );
};

export default MainHome;
const MainPage = styled.div`
  margin: 20px;
  img {
    width: 650px;
    height: 500px;
  }
  p {
    font-size: 1.5rem;
    font-family: "Times New Roman", Times, serif;
    display: flex;
    align-items: center;
    align-content: center;
    padding: 50px;
    line-height: 1.5;
  }
  .btn-first {
    align-content: center;
    width: 20%;
    height: 10%;
    padding: 10px;
    font-size: 1rem;
    color: black;
  }
  .btn-section {
    display: flex;
    justify-content: center;
  }
`;
