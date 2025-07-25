import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Card } from './card'

type List = {
  items : Card[]
}

const initialState : List = {
  items : [{
    name : 'Luiz Fernando',
    email : 'FernandoCoff@outlook.com',
    number : '(31) 9 7105-3124',
    adress : 'Belo Horizonte - MG',
    website : 'https://github.com/FernandoCoff',
    id : 1
  }]
}

const ListSlice  = createSlice({
  name : 'list',
  initialState,
  reducers : {
    addCard : (state, action : PayloadAction<Card>) => {
      state.items.push(action.payload)
    },
    removeCard : (state, action : PayloadAction<number>) => {
      state.items = state.items.filter(card => card.id !== action.payload)
    },
    editCard : (state, action : PayloadAction<{ id: number; card: Card }>) => {
      state.items = state.items.map(item =>
        item.id === action.payload.id ? action.payload.card : item
      )
    }
  }
})

export const { addCard, removeCard, editCard} = ListSlice.actions
export default ListSlice.reducer
