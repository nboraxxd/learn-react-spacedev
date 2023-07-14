import { authenticationService } from '@/services/authentication.service'
import { userService } from '@/services/user.service'
import { clearToken, clearUser, getUser, setToken, setUser } from '@/utils/token'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  user: getUser(),
  status: 'idle'
}

export const { actions: authActions, reducer: authReducer } = createSlice({
  initialState: INITIAL_STATE,
  name: 'auth',

  reducers: {
    logout: (state) => {
      state.user = null
    },

    setUser: (state, action) => {
      state.user = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signInThunkAction.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(signInThunkAction.fulfilled, (state, action) => {
      state.user = action.payload
      state.status = 'success'
    })
    builder.addCase(signInThunkAction.rejected, (state) => {
      state.status = 'error'
    })
  }
})

export const signInAction = (data) => {
  return async (dispatch) => {
    try {
      const res = await authenticationService.signIn(data.form)
      setToken(res.data)

      const user = await userService.getProfile()
      dispatch(authActions.setUser(user.data))
      setUser(user.data)

      data?.success(user.data)
    } catch (err) {
      data?.error(err)
    } finally {
      data?.finally()
    }
  }
}

export const logoutAction = (data) => {
  return (dispatch) => {
    clearToken()
    clearUser()
    dispatch(authActions.logout())
    data?.success()
  }
}

export const signInThunkAction = createAsyncThunk('auth/login', async (data, thunkApi) => {
  try {
    const res = await authenticationService.signIn(data)
    setToken(res.data)

    const user = await userService.getProfile()
    setUser(user.data)
    // thunkApi.dispatch(authActions.setUser(user.data))
    thunkApi.fulfillWithValue(user.data)

    return user.data
  } catch (error) {
    thunkApi.rejectWithValue(err.response.data)
    throw error?.response.data
  }
})
