import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, createStore } from 'redux'
import DemoSliceReducer from './reducer/demoSlice'
import DemoAnotherSliceReducer from './reducer/demoAnotherSlice'

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
  reducer: combineReducers({
    demoSlice: DemoSliceReducer,
    demoAnotherSlice: DemoAnotherSliceReducer
  })
});
export default store
