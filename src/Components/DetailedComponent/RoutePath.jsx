import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "../DetailedComponent/Address";
import Contact from "../DetailedComponent/Contact";
import Services from "../DetailedComponent/Services";
import Loginpage from "../DetailedComponent/Loginpage";
import Dashboard from "../DashboardMaterial/Dashboard";
import FourZeroFour from "../DetailedComponent/FourZeroFour";
import ProtectedRoutes from "../DetailedComponent/ProtectedRoutes";
import HomePage from "./HomePage";
import Detail from "../DashboardMaterial/Detail";
import Layout from "./Layout";
import PieCharts from "../DashboardMaterial/LineChart";
import DashBoardLayout from "../DashboardMaterial/DashBoardLayout";
import Settings from "../DashboardMaterial/Settings";
// import Filtertest from "./filtertest";
import HooksPractice from "./HooksPractice";
import BooksApi from "./BooksApi";
import Novel from "./Novel";
const RoutePath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<HomePage />}></Route>
          {/* <Route exact path="/filter" element={<Filtertest />}></Route> */}
          <Route exact path="/address" element={<Address />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/login" element={<Loginpage />}></Route>
          <Route exact path="/booksapi" element={<BooksApi />}></Route>
          <Route exact path="/books" element={<Novel />}></Route>
          <Route
            exact
            path="/hookspractice"
            element={<HooksPractice />}
          ></Route>
        </Route>

        {/* <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route> */}
        <Route exact path="" element={<FourZeroFour />}></Route>
      </Routes>
    </div>
  );
};

export default RoutePath;
