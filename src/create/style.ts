import styled from 'styled-components'
import { color } from '../style/GlobalStyle'
import { darken } from 'polished'



export const Create = styled.div`
  width: 30%;
  height: 100%;
  padding: 25px;
  background-color: ${color.bg};

  .subtitle{
    font-size: 22px;
    font-weight: 500;
    color: ${color.text};
    margin-bottom: 25px;
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 12.5px;

    div{
      display: flex;
      flex-direction: column;
      color: ${color.text};
      gap: 6.25px;

      label{
        font-size: 14px;
        font-weight: 300;
      }

      input{
        padding: 10px;
        border: 2px solid ${color.border};
        border-radius: 6px;
        font-size: 14px;
        font-weight: 400;
        background-color: transparent;

        &:focus{
          outline-color: ${color.outline};
        }
      }
    }

    .btn{
      display: flex;
      flex-direction: row;
    }

    button{
      width: 100%;
      margin-top: 25px;
      padding: 10px;
      font-size: 14px;
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
`
