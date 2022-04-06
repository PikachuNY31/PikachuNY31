import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []


export const cardSlice = createSlice({
  name: 'card',
  initialState,
  extraReducers: {
    // [getCards.fulfilled]: (state, action) => {
    //   state.cards = action.payload;
    // }
  },
})

export const getCards = createAsyncThunk(
  '/cards/getCards',
  
  () => {
    
      const response = Promise.resolve(fetch('http://localhost:3000/notes',
      {method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }},))
        .then(data => data.json())
      console.log('this is the response in cardSlice : ', response)
      return response.data;
    
  }
)

// Action creators are generated for each case reducer function
// export const { syncCards } = cardSlice.actions

export default cardSlice.reducer

// const response = await fetch(url, {
//   method,
//   body: bodyString,
//   headers: {
//     'Content-Type': 'application/json',
//     ...headers,
//   },