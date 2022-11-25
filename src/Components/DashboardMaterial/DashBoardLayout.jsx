import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import PieCharts from "./LineChart";
const { Header, Footer, Sider, Content } = Layout;

const DashBoardLayout = () => {
  return (
    <div>
      <Layout>
        <Sider>
          <SideNav />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
};

export default DashBoardLayout;
