import { configureStore } from '@reduxjs/toolkit'
import demoSlice from './reducer/demoSlice'
import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

// const store = createStore(changeState)
const store = configureStore({
  reducer: demoSlice
});
export default store
