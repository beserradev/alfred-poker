import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

a {
	text-decoration: none;
}

ol, ul {
	list-style: none;
}

img {
  display: block;
  max-width: 100%;
}
`;
