import { createGlobalStyle } from 'styled-components'

export const color = {
  bg : '#ffffff',
  body: 'linear-gradient(90deg,#a478e8ff 0%, #516cf7ff 100%)',
  text: 'black',
  outline: ' #a478e8ff',
  container : '#f1f1f1ff',
  border: '#cccccc',
  green: '#58dd47ff',
  red : '#ff6d6dff'
}

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Outfit", sans-serif;
  }

  body{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${color.body};
  }
`

export default GlobalStyle
