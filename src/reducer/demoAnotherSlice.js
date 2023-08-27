import { createSlice } from '@reduxjs/toolkit'
import ACTION_CONSTANT, { ACTION_INCREMENT } from './actionConstants'

const _createReducer = () => {
  return {
    [ACTION_CONSTANT.ACTION_INCREMENT]: function (state) {
      //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
      //     // doesn't actually mutate the state because it uses the Immer library,
      //     // which detects changes to a "draft state" and produces a brand new
      //     // immutable state based off those changes
      state.value += 1
      console.log("Demo another slice!")
    },
    ACTION_DECREMENT: state => {
      state.value -= 1
    },
    ACTION_INCREMENT_BY_AMOUNT: (state, action) => {
      state.value += action.payload
    },
    ACTION_SET: (state, ...rest) => {
      console.log(rest)
      return { ...state, ...rest }
    },
    ACTION_SET_IS_AUTHENTICATED: (state, action) => {
      console.log(state.isAuthenticated)
      console.log(action.payload)
      state.isAuthenticated = action.payload
    },
    ACTION_ADD_ITEM_TO_ARRAY: (state, action) => {
      state.initialArray = [...state.initialArray, action.payload]
      console.log(state.initialArray)
    }
  }
}

export const demoAnotherSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    isAuthenticated: false,
    sidebarShow: true,
    initialArray: [3, 4, 5]
  },
  reducers: _createReducer()
  // {
  //   increment: state => {
  //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
  //     // doesn't actually mutate the state because it uses the Immer library,
  //     // which detects changes to a "draft state" and produces a brand new
  //     // immutable state based off those changes
  //     state.value += 1
  //     console.log("Demo another slice!")
  //   },
  //   decrement: state => {
  //     state.value -= 1
  //   },
  //   incrementByAmount: (state, action) => {
  //     state.value += action.payload
  //   },
  //   set: (state, ...rest) => {
  //     console.log(rest)
  //       return { ...state, ...rest }
  //   },
  //   setIsAuthenticated: (state, action) => {
  //     console.log(state.isAuthenticated)
  //     console.log(action.payload)
  //     state.isAuthenticated = action.payload
  //   },
  //   addItemToArray: (state, action) => {
  //     state.initialArray = [...state.initialArray, action.payload]
  //     console.log(state.initialArray)
  //   }
  // }
})



// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = demoAnotherSlice.actions

export const DemoAnotherSliceAction = demoAnotherSlice.actions

export const DemoAnotherSliceReducer = demoAnotherSlice.reducer;

export default DemoAnotherSliceReducer;