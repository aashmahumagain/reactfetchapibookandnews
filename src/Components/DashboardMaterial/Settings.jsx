import React from "react";
import styled from "styled-components";

const Settings = () => {
  return (
    <div>
      <Settingss>
        <p>Settings</p>
      </Settingss>
    </div>
  );
};

export default Settings;
const Settingss = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-size: 30px;
  }
`;
