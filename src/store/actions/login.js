import request from '@/utils/request'
import { setToken,clearToken } from '@/utils'
import {LOGIN ,LOGOUT} from '../constant'
export const login = (payload) => {
  return async dispatch => {
    const res = await request({
      method: 'post',
      url: '/authorizations',
      data: payload
    })
    const { token } = res.data.data
    dispatch({ type: LOGIN, payload: token })
    // localStorage.setItem('itcast_geek_pc', token)
    setToken(token)
  }
}
export const logout= ()=>{
  return (dispatch) =>{
    clearToken()
    dispatch({
      type:LOGOUT
    })
  }
}