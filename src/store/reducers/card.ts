import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Card = {
  name : string,
  email : string,
  number : string,
  website : string,
  adress : string,
  id : number
}

const initialState : Card = {
  name : '',
  email : '',
  number : '',
  website : '',
  adress : '',
  id : 0,
}

const cardSlice = createSlice({
  name : 'card',
  initialState,
  reducers : {
    setName : (state, action : PayloadAction<string>) => {
      state.name = action.payload
    },
    setEmail : (state, action : PayloadAction<string>) => {
      state.email = action.payload
    },
    setNumber : (state, action : PayloadAction<string>) => {
      state.number = action.payload
    },
    setWebsite : (state, action : PayloadAction<string>) => {
      state.website = action.payload
    },
    setAdress : (state, action : PayloadAction<string>) => {
      state.adress = action.payload
    },
  }
})

export const { setAdress, setEmail, setName, setNumber, setWebsite } = cardSlice.actions
export default cardSlice.reducer
