import React from "react";
import styled from "styled-components";

const Table = ({ data }) => {
  return (
    <TableDataDisplay>
      <table id="customers">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableDataDisplay>
  );
};

export default Table;
const TableDataDisplay = styled.div`
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
    background-color: grey;
    color: white;
  }
`;
