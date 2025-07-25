import { configureStore } from '@reduxjs/toolkit'
import CardReducer from './reducers/card'
import ListReducer from './reducers/list'

const store = configureStore({
  reducer : {
    Card : CardReducer,
    List : ListReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
