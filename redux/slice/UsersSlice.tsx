import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { PositionType, UserType, userApi } from '@/api/userApi'
import storage from '@/utils/storage'
import generalConst from '@/constants/generalConst'
const TOKEN = generalConst.TOKEN

type SelectedPositionType = { [key: number]: string }
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
    const response = await userApi.get(1, 100)
    const usersResponse = response.users || []
    return usersResponse.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
  } catch (e) {
    console.log(e)
    return rejectWithValue('An error occurred')
  }
})

export const fetchGetUserPosition = createAsyncThunk(
  'UsersSlice/fetchGetUserPosition',
  async (_, { rejectWithValue }) => {
    try {
      const response = await userApi.getPositions()
      return response
    } catch (e) {
      console.log(e)
      return rejectWithValue('An error occurred')
    }
  }
)

const initialState = {
  users: [] as UserType[],
  positions: [] as PositionType[],
  isLoading: false as boolean | null,
  page: 1,
  limit: 6,
  countRecord: 0,
  selectedPosition: 0,
}
const UsersSlice = createSlice({
  name: 'UsersSlice',
  initialState: initialState,
  reducers: {
    setPosition: (state, { payload }) => {
      state.selectedPosition = payload
    },
    setPage: (state, { payload }) => {
      state.page = payload + 1
    },
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
      state.countRecord = payload?.length
    })
    builder.addCase(fetchGetUsers.rejected, (state, action) => {
      state.isLoading = false
      alert('Error')
    })
    /* fetchGetToken */
    builder.addCase(fetchGetUserPosition.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchGetUserPosition.fulfilled, (state, { payload }) => {
      state.positions = payload.positions || []
    })
    builder.addCase(fetchGetUserPosition.rejected, (state) => {
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
export const selectPositionSelected = (state: RootState) => state.usersReducer.selectedPosition
export const selectPosition = (state: RootState) => state.usersReducer.positions
export const selectPage = (state: RootState) => state.usersReducer.page
export const selectLimit = (state: RootState) => state.usersReducer.limit
export const selectCountRecord = (state: RootState) => state.usersReducer.countRecord
export const selectUsers = (state: RootState) => state.usersReducer.users
export const selectIsLoading = (state: RootState) => state.usersReducer.isLoading

export const { reducer: usersReducer, actions: usersActions } = UsersSlice
