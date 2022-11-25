import React from "react";
import styled from "styled-components";
import error from "../../assets/error.jpg";
const FourZeroFour = () => {
  return (
    <ErrorDisplay>
      <img src={error}></img>
    </ErrorDisplay>
  );
};

export default FourZeroFour;
const ErrorDisplay = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 50%;
    height: 500px;
  }
`;
