import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { loginurl } from "../Api/Url";
import axios from "axios";
const LoginPage = () => {
  const [submit, setSubmit] = useState();
  const [post, setPosts] = useState([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleFormSubmit = (event) => {
    console.log(event, "myevent");
    const user = event.user;
    const pass = event.pass;
    axios
      .post(loginurl, {
        user,
        pass,
      })
      .then((response) => {
        console.log(response, "mydata");
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(username, Password);
    // form.validateFields().then((values) => {
    //   setSubmit(values);
    //   console.log(values);
    // });

    // navigate("/dashboard");
  };
  return (
    <Formpage>
      <Form
        onSubmit={handleFormSubmit}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 18,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleFormSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="user"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="pass"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        ></Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div className="btn-login">
            <Button type="primary" htmlType="submit" onClick={handleFormSubmit}>
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Formpage>
  );
};
export default LoginPage;
const Formpage = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
`;
