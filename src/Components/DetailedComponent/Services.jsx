import React, { useEffect, useState } from "react";
import { Button, Form, InputNumber, Descriptions } from "antd";
import styled from "styled-components";
const Services = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [num3, setNum3] = useState();
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);
  const [mul, setMul] = useState(0);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    sum();
    multiply();
    subtract();
  }, [num1, num2, num3]);
  const sum = () => {
    let finalsum = num1 + num2 + num3;
    setAdd(finalsum);
  };
  const multiply = () => {
    let finalmul = num1 * num2 * num3;
    setMul(finalmul);
  };
  const subtract = () => {
    let finalsub = num1 - num2 - num3;
    setSub(finalsub);
  };
  return (
    <ServicesCalculator>
      <h1>My calculator</h1>
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 9,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="FirstNumber"
          name="num1"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <InputNumber
            onChange={(e) => {
              setNum1(e);
            }}
          />
        </Form.Item>

        <Form.Item
          label="SecondNumber"
          name="num2"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <InputNumber
            onChange={(e) => {
              setNum2(e);
            }}
          />
        </Form.Item>
        <Form.Item
          label="ThirdNumber"
          name="num3"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <InputNumber
            onChange={(e) => {
              setNum3(e);
            }}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          {/* <Button className="btn-add" type="primary" htmlType="submit">
            Display
          </Button> */}
        </Form.Item>
      </Form>
      <div className="desp-details">
        <Descriptions
          bordered
          layout="horizontal"
          column={1}
          size="small"
          style={{ width: 300 }}
        >
          <Descriptions.Item label="Add" style={{ width: 300 }}>
            {add}
          </Descriptions.Item>
          <Descriptions.Item label="Sub" style={{ width: 300 }}>
            {sub}
          </Descriptions.Item>
          <br></br>
          <Descriptions.Item label="Mul" style={{ width: 300 }}>
            {mul}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </ServicesCalculator>
  );
};

export default Services;
export const ServicesCalculator = styled.div`
  display: grid;
  justify-content: center;
  .btn-add {
  }
`;
