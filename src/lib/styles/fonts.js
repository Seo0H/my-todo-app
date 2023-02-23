import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body, * {
	font-family: 'Pretendard';
  margin: 0;
}

#root {
  min-height: 10vh;
}

html {
  height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

li {
  list-style: none;
}

* {
  box-sizing: none;
}

button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

`;
