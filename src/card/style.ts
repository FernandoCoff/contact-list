import styled from 'styled-components'
import { color } from '../style/GlobalStyle'
import { darken } from 'polished'

export const Card = styled.div`
  width: 100%;
  height: 10rem;
  background: ${color.bg};
  padding: 12.5px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 6.25px;

  header{
    display: flex;
    justify-content: space-between;

    div{
      display: flex;
      gap: 12.5px;

      button{
      padding: 5px;
      font-size: 12px;
      border: none;
      border-radius: 6px;
      background: ${color.green};
      color: ${color.container};
      transition: .4s;

      &.red{
        background-color: ${color.red};

        &:hover{
          background-color: ${darken(0.1, color.red)};
        }
      }

      &:hover{
        background-color: ${darken(0.1, color.green)};
      }
    }
    }
  }

  h4{
    font-size: 18px;
  }

  p{
    font-size: 14px;
  }

  a{
    color: ${color.outline};
    text-decoration: none;
  }
`
