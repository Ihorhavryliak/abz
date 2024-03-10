import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { PositionType, UserType, userApi } from '@/api/userApi'
import { InputFieldNameType } from '@/components/Section/SectionForm/hooks/useFormData'
import getAllUsers from './function/getAllUsers'

export const fetchGetUsers = createAsyncThunk('UsersSlice/fetchGetUsers', async (_, { rejectWithValue }) => {
  try {
   return await getAllUsers()
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

export const fetchCreateUser = createAsyncThunk(
  'FormSlice/fetchCreateUser',
  async (data: InputFieldNameType, { rejectWithValue }) => {
    try {
      const responseToken = await userApi.getToken()
      const response = await userApi.create(
        {
          name: data?.name as string,
          email: data?.email as string,
          phone: data?.phone as string,
          position_id: data?.position as string,
          photo: data.file as FileList,
        },
        responseToken.token
      )
      if (response.success) {
      return  await getAllUsers()
      }
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
  isSuccessSendUserData: false,
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
      const users = payload || []
      state.users = users
      state.countRecord = users?.length
      state.isLoading = false
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
      state.isLoading = false
    })
    builder.addCase(fetchGetUserPosition.rejected, (state) => {
      state.isLoading = false
      alert('Error')
    })
    /* fetchCreateUser */
    builder.addCase(fetchCreateUser.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchCreateUser.fulfilled, (state, { payload }) => {
      const users = payload || []
      state.users = users
      state.countRecord = users?.length
      state.isSuccessSendUserData = true
      state.page = 1
      state.limit = 6
      state.isLoading = false
    })
    builder.addCase(fetchCreateUser.rejected, (state, action) => {
      state.isLoading = false
      alert('Error')
    })
  },
})

export const selectIsSuccessSendUserData = (state: RootState) => state.usersReducer.isSuccessSendUserData
export const selectPositionSelected = (state: RootState) => state.usersReducer.selectedPosition
export const selectPosition = (state: RootState) => state.usersReducer.positions
export const selectPage = (state: RootState) => state.usersReducer.page
export const selectLimit = (state: RootState) => state.usersReducer.limit
export const selectCountRecord = (state: RootState) => state.usersReducer.countRecord
export const selectUsers = (state: RootState) => state.usersReducer.users
export const selectIsLoading = (state: RootState) => state.usersReducer.isLoading

export const { reducer: usersReducer, actions: usersActions } = UsersSlice
