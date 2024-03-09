import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type RootState } from '../store'

export type DataType = {
  [key: string]: string
}

export const fetchCreateForm = createAsyncThunk(
  'FormSlice/fetchCreateForm',
  async (_, { rejectWithValue, getState }) => {
    try {
      /* 
      const response = await formApi.post(dataSend);
      return response; */
    } catch (e) {
      console.log(e)
      return rejectWithValue('An error occurred')
    }
  }
)

const initialState = {
  data: {} as DataType,
  numberLastItem: 0 as number,
  isLoading: null as boolean | null,
}
const FormSlice = createSlice({
  name: 'FormSlice',
  initialState: initialState,
  reducers: {
    setData: (state, { payload }) => {
      const { value, key } = payload
      state.data[key] = value
    },
  },
  extraReducers: (builder) => {
    /* fetchCreateForm */
    builder.addCase(fetchCreateForm.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchCreateForm.fulfilled, (state, action) => {
      state.isLoading = null
    })
    builder.addCase(fetchCreateForm.rejected, (state, action) => {
      state.isLoading = false
      alert('Error')
    })
  },
})

/* export const selectReasons = (state: RootState) => state.formReducer.reasons */

export const { reducer: formReducer, actions: formActions } = FormSlice
