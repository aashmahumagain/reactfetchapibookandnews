import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import React, { useState } from "react";
import styled from "styled-components";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("DashBoard", "*/piechart", <PieChartOutlined />),
  getItem("Details", "*/detail", <DesktopOutlined />),
  getItem("Settings", "*/settings", <ContainerOutlined />),
  getItem("Customers", "4", <MailOutlined />),
  getItem("Department", "5", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
  ]),
];
const SideNav = () => {
  const navigate = useNavigate();
  return (
    <SideSection>
      <div
        style={{
          width: 256,
        }}
      >
        <div className="logo-section">
          <img className="logo-img" src={logo}></img>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          // inlineCollapsed={collapsed}
          items={items}
          onClick={({ key }) => {
            if (key === "abc") {
            } else {
              navigate(key);
            }
          }}
        />
      </div>
    </SideSection>
  );
};
export default SideNav;
const SideSection = styled.div`
  .logo-img {
    width: 150px;
  }
  .logo-section {
    background-color: #001529;
  }
`;
