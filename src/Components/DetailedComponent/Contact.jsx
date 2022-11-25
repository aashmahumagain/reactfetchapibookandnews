import React, { useEffect } from "react";
import { useState } from "react";
import { Users } from "./usersarray";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styled from "styled-components";
import Table from "./Table";
const { Search } = Input;

const Contact = () => {
  const [na, setNa] = useState("");
  const onSearch = (value) => {
    setNa(value);
    console.log(value, "myvalues");
  };
  return (
    <FilterDataPage>
      <div>
        <h1>Data Filter on search button</h1>
        <div className="filter-section">
          <Search
            style={{ width: "25%", margin: "5%" }}
            placeholder="input search text"
            onSearch={onSearch}
          />
        </div>
        <Table
          data={Users.filter(
            (user) =>
              user.firstname.toLowerCase().includes(na) ||
              user.firstname.toUpperCase().includes(na) ||
              user.lastname.toLowerCase().includes(na) ||
              user.lastname.toUpperCase().includes(na) ||
              user.email.toLowerCase().includes(na) ||
              user.email.toUpperCase().includes(na) ||
              user.gender.toLowerCase().includes(na) ||
              user.gender.toUpperCase().includes(na)
          )}
        />
        {/* <div className="list-section">
          <ul className="list">
            {Users.filter((user) =>
              user.firstname.toLowerCase().includes(na)
            ).map((user) => (
              <li className="listitem">{user.firstname}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </FilterDataPage>
  );
};

export default Contact;
const FilterDataPage = styled.div`
  .listitem {
    list-style-type: none;
    font-size: 30px;
  }
  h1 {
    font-size: 32px;
    text-align: center;
  }
  .list-section {
    display: flex;
    justify-content: center;
  }
  .filter-section {
    display: flex;
    justify-content: center;
  }
`;
