import styled from 'styled-components'
import { color } from '../style/GlobalStyle'

export const List = styled.div`
  width: 70%;
  height: 100%;
  background-color: ${color.body};
  padding: 25px;


  h1{
    font-size: 28px;
    font-weight: 500;
    color: ${color.text};
    margin-bottom: 25px;
  }

  ul{
    width: 100%;
    max-height: 89%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    overflow-y: scroll;
    padding-bottom: 25px;
    padding-right: 25px;

    &::-webkit-scrollbar{
      background: transparent;
    }
  }

  li{
    list-style: none;
  }
`
