import React, { useState } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Input } from "@mui/material";
// import MonthPicker from '@mui/lab/MonthPicker';
import MonthPicker from "./MonthPicker";

function SignUpModal({ setOpenModal }) {
  const [value, onChange] = useState(new Date());

  return (
    <MiddleModal>
      <Nav>
        <CustomClearIcon onClick={() => setOpenModal(false)} />
        <CustomTwitter fontSize="large" />
      </Nav>
      <Container>
        <h3>Create your account</h3>
        <InputGroup>
          <input type="text" placeholder="Name" />
          <input type="Number" placeholder="Number" />
        </InputGroup>
        <p>Use email instead</p>
        <Section>
          <SpanFirst>Date of birth</SpanFirst>
          <SpanSecond>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </SpanSecond>
        </Section>
        <MonthPicker />
      </Container>
      <GroupButton>
        <Button>Next</Button>
      </GroupButton>
    </MiddleModal>
  );
}

export default SignUpModal;

const MiddleModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: white;
  width: 600px;
  height: 550px;
  // background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  overflow-y: auto;
  height: 75%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
  p {
    color: #1d9bf0;
  }
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
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
  width: 80%;
  display: flext;
  align-items: center;
  justify-content: center;
  background-color: #87898c;
  padding: 10px 20px;
  border-radius: 100px;
  color: white;
  font-size: 600px;
`;
