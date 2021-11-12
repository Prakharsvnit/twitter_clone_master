import React from "react";
import styled from "styled-components";

function Notification() {
  return (
    <Container>
      <Nav>
        <Left>Notifications</Left>
        <SettingIcon>
          <i class="bi bi-gear"></i>
        </SettingIcon>
      </Nav>
      <TabSection>
        <All>All</All>
        <Mention>Mentions</Mention>
      </TabSection>
    </Container>
  );
}

export default Notification;

const Container = styled.div`
  width: 100%;
`;
const Nav = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 17px;
`;
const SettingIcon = styled.div`
  cursor: pointer;
`;
const TabSection = styled.div`
  display: flex;
`;
const All = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 100px;
  &:hover {
    background-color: #e6e7e7;
    font-weigh: bold;
    color: black;
    border-bottom: 2px solid blue;
  }
`;
const Mention = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 100px;
  &:hover {
    background-color: #e6e7e7;
    font-weigh: bold;
    color: black;
  }
`;
