import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
// const header = {
//   "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
// };
// const intercep = axios.create({
//   baseUrl: "http://localhost:3000/users",
//   headers: header,
// });
axios.interceptors.request.use((request) => {
  console.log(request, "myrrequest");
  request.headers.pagename = "aashma ";
  return request;
});
axios.interceptors.response.use((response) => {
  console.log(response, "myresponse");
  return response;
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
