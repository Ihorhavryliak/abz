import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { UsersType, userApi } from '@/api/userApi'
import storage from '@/utils/storage'
import generalConst from '@/constants/generalConst'
const TOKEN = generalConst.TOKEN

export type DataType = { [key: string]: string }
export type UserQueryType = {
  page: number
  count: number
}

export const fetchGetToken = createAsyncThunk('UsersSlice/fetchGetToken', async (_, { rejectWithValue }) => {
  try {
    const response = await userApi.getToken()
    return response
  } catch (e) {
    console.log(e)
    return rejectWithValue('An error occurred')
  }
})
export const fetchGetUsers = createAsyncThunk('UsersSlice/fetchGetUsers', async (_, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState
    const response = await userApi.get(1, 5)
    return response
  } catch (e) {
    console.log(e)
    return rejectWithValue('An error occurred')
  }
})

const initialState = {
  users: [] as UsersType[],
  isLoading: false as boolean | null,
}
const UsersSlice = createSlice({
  name: 'UsersSlice',
  initialState: initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload
    },
  },
  extraReducers: (builder) => {
    /* fetchCreateUsers */
    builder.addCase(fetchGetUsers.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchGetUsers.fulfilled, (state, { payload }) => {
      state.users = payload
    })
    builder.addCase(fetchGetUsers.rejected, (state, action) => {
      state.isLoading = false
      alert('Error')
    })
    /* fetchGetToken */
    builder.addCase(fetchGetToken.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchGetToken.fulfilled, (_, { payload }) => {
      storage.addStorage(TOKEN, payload)
    })
    builder.addCase(fetchGetToken.rejected, (state) => {
      state.isLoading = false
      alert('Error')
    })
  },
})

export const selectUsers = (state: RootState) => state.usersReducer.users

export const selectIsLoading = (state: RootState) => state.usersReducer.isLoading

export const { reducer: usersReducer, actions: usersActions } = UsersSlice
