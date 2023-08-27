import { createSlice } from '@reduxjs/toolkit'

export const demoSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    isAuthenticated: false,
    sidebarShow: true,
    initialArray: [3, 4, 5]
  },
  reducers: {
    "increment": state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
      console.log("Demo Slice!")
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    set: (state, ...rest) => {
      console.log(rest)
        return { ...state, ...rest }
    },
    setIsAuthenticated: (state, action) => {
      console.log(state.isAuthenticated)
      console.log(action.payload)
      state.isAuthenticated = action.payload
    },
    addItemToArray: (state, action) => {
      state.initialArray = [...state.initialArray, action.payload]
      console.log(state.initialArray)
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = demoSlice.actions

export const DemoSliceAction = demoSlice.actions

export const DemoSliceReducer = demoSlice.reducer;

export default DemoSliceReducer;