import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(180deg,
      ${props => props.theme.colors.primary} 0%,
      ${props => props.theme.colors.tertiary} 84.5%
    );
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
