import React, { useReducer, useRef, useState } from "react";
import { Input, Col, Row } from "antd";
import styled from "styled-components";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "ToggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};
const HooksPractice = () => {
    
  //use-ref example
  const inputref = useRef(null);
  const onClick = () => {
    console.log(inputref.current);
    console.log(inputref.current.input.defaultValue);
    // inputref.current.input.defaultValue = "";
  };
  //usereducer
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  //usestate
  const [change, setChange] = useState();
  let onChange = (e) => {
    const firstvalue = e.target.value;
    setChange(firstvalue);
  };

  return (
    <>
      <HookPage>
        <h1>Use State</h1>

        <Input
          style={{
            width: 200,
          }}
          onChange={onChange}
        />
        <div>
          <h2> {change}</h2>
        </div>
      </HookPage>
      <Row justify="space-around">
        <Col span={8}>
          <div>
            <h2>UseReducer example action and dispatch</h2>
            <h1>{state.count}</h1>
            <button
              onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "ToggleShowText" });
              }}
            >
              Click here
            </button>
            {state.showText && <p>This is text</p>}
          </div>
        </Col>
        <Col span={8}>
          <h3>Use Reference Example</h3>
          <h2>Nepal</h2>
          <Input type="text" placeholder="Ex.." ref={inputref} />
          <button onClick={onClick}>change name</button>
        </Col>
      </Row>
    </>
  );
};

export default HooksPractice;
const HookPage = styled.div`
  margin: 20px;
  .Input {
    margin-left: 10px;
  }
`;
