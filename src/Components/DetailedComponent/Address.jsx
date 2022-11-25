import React, { useState } from "react";
import styled from "styled-components";
import { dataTable } from "../Api/Url";
//note:only 1 object cha bhane no need to map
const FetchApi = () => {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch(dataTable)
      .then((response) => response.json())
      .then((json) => {
        console.log(json, "son");

        setData(json);
        console.log(data, "mydata");
      });
  };
  return (
    <AddressTable>
      <h1>Fetch Data Api</h1>
      <button className="fetchbtn" onClick={apiGet}>
        Fetch data
      </button>
      <br />
      <DataCenter>
        <table id="customers">
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>title</th>
          </tr>
          {data.map((abc) => (
            <tr>
              <td>{abc.id}</td>
              <td>{abc.userId}</td>
              <td>{abc.title}</td>
            </tr>
          ))}
        </table>
      </DataCenter>
    </AddressTable>
  );
};

export default FetchApi;

const AddressTable = styled.div`
  .fetchbtn {
    margin: 10px !important;
    font-size: 18px;
  }
`;
const DataCenter = styled.div`
  display: flex;
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  #customers td,
  #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #customers tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #customers tr:hover {
    background-color: #ddd;
  }

  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
  }
`;
