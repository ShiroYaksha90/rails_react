// import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const API_URL = "/api/greetings/random";

// export const fetchGreeting = createAsyncThunk("greeting", async () => {
//     const res = await axios.get(API_URL);
//     console.log(res.data);
//     return res.data.greeting.message;
// });


export const getRandomGreeting = createAsyncThunk(
  '/api/greetings/random',
  async () => {
    const res = await fetch('/api/greetings/random');
    const data = await res.json();
    return data.greeting.message;
  },
);

const initialState = {
  message: '',
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder) {
    builder.addCase(getRandomGreeting.fulfilled, (state, {payload}) => {
      state.greeting = payload;
    });
  },
});

export default greetingSlice.reducer;