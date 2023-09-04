import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ACTION_CONSTANT, { ACTION_INCREMENT } from './actionConstants'
import axios from 'axios'

const _createReducer = () => {
  return {
    [ACTION_CONSTANT.ACTION_LOGIN_SUCCESS]: function (state, action) {
      // console.log("ACTION_LOGIN_SUCCESS", payload);
      console.log(state)
      console.log(action.payload)
      state.isAuthenticated = true;
      
      
      
    },
    [ACTION_CONSTANT.ACTION_INCREMENT]: function (state, action) {

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

export async function fetchCount(amount = 1) {

  const response = async (amount) => {
   const t = await axios.get("https://catfact.ninja/fact")
    .then(res => {
      console.log(res.data);
      return {data: 2};
    })
    .catch(e => {
      console.log("Fail!");
      return {data: 3}
    })
    return t
  }

  const value = await response(amount);
  console.log(value);
  return value;
  // return new Promise((resolve) =>
  // setTimeout(() => resolve({ data: amount }), 1500)
  // );
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const demoAnotherSlice = createSlice({
  name: 'demoAnotherSlice',
  initialState: {
    value: 0,
    isAuthenticated: false,
    username: "",
    password: "",
    sidebarShow: true,
    initialArray: [3, 4, 5]
  },
  reducers: _createReducer(),
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        // state.status = 'loading';
        console.log("Loading...")
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        // state.status = 'idle';
        state.value += action.payload;
        console.log("Completed!")
      });
  }
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