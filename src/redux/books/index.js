import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'books',
  initialState: {
    isLoading: false,
    isLoaded: false,
    lastRequest: {},
    total: 0,
    list: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setLoaded: (state, action) => {
      state.isLoaded = action.payload
    },
    setTotal: (state, action) => {
      state.total = action.payload
    },
    setBooks: (state, action) => {
      state.list = action.payload
    },
    appendBooks: (state, action) => {
      state.list = [].concat(state.list, action.payload)
    },
    setLastRequest: (state, action) => {
      state.lastRequest = action.payload
    }
  },
})

export const {
  setLoading,
  setLoaded,
  setTotal,
  setBooks,
  appendBooks,
  setLastRequest
} = counterSlice.actions

export default counterSlice.reducer

export * from './thunk'