import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://type.fit/api/quotes')
    return response.json();
})

const initialQuoteState = {
    isLoading: false,
    data: null,
    isError: false
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialQuoteState,
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true
        })
    }
})

export default todoSlice.reducer