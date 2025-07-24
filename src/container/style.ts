import styled from 'styled-components'
import { color } from '../style/GlobalStyle'

export const Container = styled.div`
  width: 90vw;
  height: 80vh;
  background-color: ${color.container};
  box-shadow: 5px 5px 10px rgba(0,0,0,.2);
  display: flex;
  align-items: center;
  justify-content: center;


  button{
    cursor: pointer;
  }
`
