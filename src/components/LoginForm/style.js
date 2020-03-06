import styled, { css } from "styled-components";
import { CenterContainer } from "../styles";
import LoginIcon from "./img/user.svg";
import PassIcon from "./img/lock.svg";
import RedButton from "./img/red-button.jpg";
import BlueButton from "./img/blue-button.jpg";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 55px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px 15px 5px 37px;
  margin-top: 5px;
  border: 2px solid rgba(34, 36, 38, 0.15);
  background: linear-gradient(135deg, #fffff0, #f0f0f0);
  border-radius: 5px;
  font-family: inherit;
  font-size: 20px;
  color: #131313;

  :focus {
    ${({ isInvalid }) => {
      return (
        !isInvalid &&
        css`
          box-shadow: 0 0 3pt 2pt green;
          border-color: green;
        `
      );
    }}
  }

  ${({ isInvalid }) => {
    return (
      isInvalid &&
      css`
        box-shadow: 0 0 3pt 2pt red;
        border-color: red;
      `
    );
  }}
`;

export const InputFeedback = styled.div`
  color: red;
  margin-top: 0.25rem;
`;

export const Label = styled.label`
  position: relative;
  width: 65%;
  height: 45px;
  margin: 25px auto;
  color: #fff;

  :before {
    content: url(${props => props.htmlFor === "password" ? PassIcon : LoginIcon});
    position: absolute;
    z-index: 10;
    left: 10px;
    top: 80%;
    width: 32px;
    height: 100%;
  }
`;

export const ButtonsWrapper = styled(CenterContainer)`
  position: relative;
  width: 100%;
  margin-top: 25px;
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  padding: 10px 35px;
  margin: 0 15px;
  transform: translateY(10px);
  border-radius: 5px;
  border: 3px solid;
  border-image: url("https://i.pinimg.com/originals/aa/90/9c/aa909c40a0ad5449ef0a393d14c8472f.jpg")
    100 stretch;
  background: transparent;
  outline: 0;
  color: #fff;
  font-family: CaslonAntique;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.type === "login" ? BlueButton : RedButton});
    background-size: cover;
    filter: blur(3px);
    transition: filter 0.3s ease-out;
  }

  :hover:before,
  :active:before {
    filter: blur(0);
  }
`;
