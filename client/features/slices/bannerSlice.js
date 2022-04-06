import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    banner: [],
  }

export const bannerSlice = createSlice({
name: 'banner',
initialState,
// extraReducers: {
//   [getBanner.fulfilled]: (state, action) => {
//     state.banner = action.payload;
//   }
// },
})

// export const getBanner = createAsyncThunk(
//   '/banner/getBanner',
  
//   async () => {
// 		try {
// 			const response = await fetch('http://localhost:3000/store/banner');
//       const formattedResponse = await response.json();
// 			return formattedResponse.data.banner;
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	}

export default bannerSlice.reducer