import { toast } from 'react-toastify'
import * as api from '../api/index'
import { setUser } from '../slices/authSlice'

export const signIn = (userData, navigate) => async (dispatch) => {
  try {
    // sign in the user
    const { data } = await api.signIn(userData)
    dispatch(setUser(data))
    navigate('/')
  } catch (error) {
    const msg =
      error?.response?.data?.message ||
      error?.message ||
      'Sign In failed. Please try again.'
    toast.error(msg)
    // console.log('Sign In Error............', error)
  }
}

export const signUp = (userData, navigate) => async (dispatch) => {
  try {
    // sign up the user
    const { data } = await api.signUp(userData)
    dispatch(setUser(data))
    navigate('/')
  } catch (error) {
    const msg =
      error?.response?.data?.message ||
      error?.message ||
      'Sign Up failed. Please try again.'
    toast.warning(msg)
    // console.log('Sign Up Error............', error)
  }
}
