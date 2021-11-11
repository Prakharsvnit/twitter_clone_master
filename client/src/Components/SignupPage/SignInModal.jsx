import React, { useState } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Input } from "@mui/material";
// import MonthPicker from '@mui/lab/MonthPicker';
import MonthPicker from "./MonthPicker";

function SignInModal({ setOpenModalSecond }) {
  return (
    <MiddleModal>
      <Nav>
        <CustomClearIcon onClick={() => setOpenModalSecond(false)} />
        <CustomTwitter fontSize="large" />
      </Nav>
      <p>To get started, first enter your phone, email address or @username</p>
      <Container>
        <InputGroup>
          <input type="text" placeholder="Phone,email address or username" />
        </InputGroup>
        <GroupButton>
          <Button>
            <span style={{ borderBottom: "2px solid black" }}>
              Forget-password?
            </span>
          </Button>
        </GroupButton>
      </Container>
    </MiddleModal>
  );
}

export default SignInModal;

const MiddleModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: white;
  width: 630px;
  height: 580px;
  // background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  p {
    padding: 2px 25px;
    font-size: 25px;
    margin-bottom: 0px;
    font-weight: bold;
  }
`;
const Nav = styled.div`
  position: relative;
  padding: 20px;
`;
const CustomClearIcon = styled(ClearIcon)`
  cursor: pointer;
`;
const CustomTwitter = styled(TwitterIcon)`
  position: absolute;
  left: 50%;
  color: blue;
`;
const Container = styled.div`
  height: 75%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  p {
    color: #1d9bf0;
  }
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
  input {
    width: 100%;
    height: 55px;
    padding: 10px;
    border: 0px;
    margin-bottom: 23px;
    font-size: 12px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(211, 211, 211);
    font-size: 17px;
    &:focus {
      border: 2px solid #1d9bf0;
    }
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const SpanFirst = styled.span`
  font-weight: bold;
`;
const SpanSecond = styled.span`
  font-size: 14px;
  opacity: 0.7;
`;
const GroupButton = styled.div`
  width: 100%;
  // background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.div`
  width: 97%;
  display: flext;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 100px;
  color: black;
  margin-bottom: 20px;
  font-weidth: 600px;
  &:hover {
    background-color: #e6e7e7;
    transition: background-color 1000ms linear;
  }
`;
