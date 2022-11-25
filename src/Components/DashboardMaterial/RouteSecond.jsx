import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import DashBoardLayout from "./DashBoardLayout";
import Detail from "./Detail";
import PieCharts from "./LineChart";
import Settings from "./Settings";
const RouteSecond = () => {
  // <Route exact path="*/piechart" element={<PieCharts />}></Route>
  //         <Route exact path="*/piechart" element={<PieCharts />}></Route>
  //         <Route exact path="*/detail" element={<Detail />}></Route>
  //         <Route exact path="*/settings" element={<Settings />}></Route>
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path=""></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default RouteSecond;
