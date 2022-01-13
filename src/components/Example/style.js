import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 60px;
`;

export const Title = styled.h1`
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 2.25rem;
  text-align: center;
  margin-left: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 20px;
`;

export const InputEmail = styled.input.attrs({ type: "text" })`
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  width: 300px;
`;
export const InputPassword = styled.input.attrs({ type: "password" })`
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  width: 300px;
`;

export const Button = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  cursor: pointer;

  background: ${(props) =>
    props.primary ? (props) => props.theme.colors.secondary : "white"};
  color: ${(props) =>
    props.primary ? "white" : (props) => props.theme.colors.secondary};

  &:hover {
    border: 2px solid ${(props) => props.backgroundHover || "purple"};
    background: ${(props) => props.backgroundHover || "purple"};
    color: white;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider}::before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &::focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 40px;
`;
