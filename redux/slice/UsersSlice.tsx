import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { UserType, userApi } from '@/api/userApi'
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

export const fetchGetCountPageUsers = createAsyncThunk(
  'UsersSlice/fetchGetCountPageUsers',
  async (_, { rejectWithValue, getState }) => {
    try {
      const store = getState() as RootState
      const limit = store.usersReducer.limit

      const response = await userApi.get(1, limit)
      const totalPages = response.total_pages || 1
      const responseSecond = await userApi.get(totalPages, limit)

      const countLastUserFirstRequest = responseSecond.users?.length
      const isLimitEqualRecord = limit === countLastUserFirstRequest
      return { totalPages, countLastUserFirstRequest, isLimitEqualRecord }
    } catch (e) {
      console.log(e)
      return rejectWithValue('An error occurred')
    }
  }
)

export const fetchGetUsers = createAsyncThunk('UsersSlice/fetchGetUsers', async (_, { rejectWithValue, getState }) => {
  try {
    //TODO: refactor
    const store = getState() as RootState
    const page = store.usersReducer.page
    const limit = store.usersReducer.limit
    const totalPages = store.usersReducer.totalPages
    const usersState = store.usersReducer.users
    const countLastUserFirstRequest = store.usersReducer.countLastUserFirstRequest
    const isLimitEqualRecord = store.usersReducer.isLimitEqualRecord

    const currentPage = totalPages - page
    const isCurrentPageOne = currentPage === 1

    const isNotCountLastUserFirstRequestEqualLimit = countLastUserFirstRequest !== limit
    //if last items count not equal limit join two request and slice 6 record in first request
    if (countLastUserFirstRequest !== limit && !isLimitEqualRecord) {
      const response = await userApi.get(currentPage, limit)
      const userResponse = response.users || []

      const responseSecond = currentPage !== 1 ? await userApi.get(currentPage - 1, limit) : {}
      const userResponseSecond = responseSecond?.users || []

      const joinUserData = [...userResponse, ...userResponseSecond.slice(-countLastUserFirstRequest)].sort(
        (a, b) => b.id - a.id
      )
      const users = joinUserData

      return { users, response, page: page + 1 }
    }
    //if we have isNotCountLastUserFirstRequestEqualLimit do a request
    if (isCurrentPageOne && isNotCountLastUserFirstRequestEqualLimit) {
      const response = await userApi.get(currentPage, limit)
      const userResponse = response.users || []
      const joinUserData = [...userResponse.slice(0, countLastUserFirstRequest)].sort((a, b) => b.id - a.id)
      const users = [...usersState, ...joinUserData]
      return { users, response, page: page + 1 }
    }

    const response = await userApi.get(currentPage, limit)
    const userResponse = response.users || []

    const responseSecond = currentPage !== 1 ? await userApi.get(currentPage - 1, limit) : {}
    const userResponseSecond = responseSecond?.users || []

    const joinUserData = [
      ...userResponse.slice(0, countLastUserFirstRequest),
      ...userResponseSecond.slice(-countLastUserFirstRequest),
    ].sort((a, b) => b.id - a.id)

    const users = [...usersState, ...joinUserData]
    return { users, response, page: page + 1 }
  } catch (e) {
    console.log(e)
    return rejectWithValue('An error occurred')
  }
})

const initialState = {
  users: [] as UserType[],
  isLoading: false as boolean | null,
  page: 0,
  limit: 6,
  countRecord: 0,
  totalPages: 0,
  countLastUserFirstRequest: 0,
  isLimitEqualRecord: true,
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
      const { users, response, page } = payload
      if (users) {
        state.users = users
      }
      state.page = page
      state.countRecord = response?.total_users || 0
      state.isLimitEqualRecord = true
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
    /* fetchGetToken */
    builder.addCase(fetchGetCountPageUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchGetCountPageUsers.fulfilled, (state, { payload }) => {
      const { totalPages, countLastUserFirstRequest, isLimitEqualRecord } = payload
      state.totalPages = totalPages || 0
      state.countLastUserFirstRequest = countLastUserFirstRequest || 0
      state.isLimitEqualRecord = isLimitEqualRecord
    })
    builder.addCase(fetchGetCountPageUsers.rejected, (state) => {
      state.isLoading = false
      alert('Error')
    })
  },
})

export const selectCountRecord = (state: RootState) => state.usersReducer.countRecord

export const selectUsers = (state: RootState) => state.usersReducer.users

export const selectIsLoading = (state: RootState) => state.usersReducer.isLoading

export const { reducer: usersReducer, actions: usersActions } = UsersSlice
