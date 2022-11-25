import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const TopNav = () => {
  const navigate = useNavigate();
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["mail"]}
      onClick={({ key }) => {
        if (key === "abc") {
        } else {
          navigate(key);
        }
      }}
    >
      <Menu.Item key="/" icon={<MailOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="/address" icon={<MailOutlined />}>
        Address
      </Menu.Item>
      <Menu.Item key="/contact" icon={<MailOutlined />}>
        Contact
      </Menu.Item>
      <Menu.Item key="/services" icon={<MailOutlined />}>
        Calculator
      </Menu.Item>
      <Menu.Item key="/login" icon={<MailOutlined />}>
        login
      </Menu.Item>
      <Menu.Item key="/hookspractice" icon={<MailOutlined />}>
        Hooks
      </Menu.Item>
      <Menu.Item key="/booksapi" icon={<MailOutlined />}>
        Read News
      </Menu.Item>
      <Menu.Item key="/books" icon={<MailOutlined />}>
        Popular Books
      </Menu.Item>
    </Menu>
  );
};
export default TopNav;
