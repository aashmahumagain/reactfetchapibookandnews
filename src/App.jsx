import "./App.css";
import "antd/dist/antd.css";
import HomePage from "./Components/DetailedComponent/HomePage";
import RoutePath from "./Components/DetailedComponent/RoutePath";
import Layout from "./Components/DetailedComponent/Layout";
import Address from "./Components/DetailedComponent/Address";
import Contact from "./Components/DetailedComponent/Contact";
import Services from "./Components/DetailedComponent/Services";
import { RouterProvider, Routes, Route } from "react-router-dom";
import Loginpage from "./Components/DetailedComponent/Loginpage";
import RouteSecond from "./Components/DashboardMaterial/RouteSecond";
function App() {
  return (
    <div className="App">
      <RoutePath />
      <RouteSecond />
      {/* route router <admin></admin>
      router <user></user> */}
    </div>
  );
}

export default App;
