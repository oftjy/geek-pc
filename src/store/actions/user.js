import request from '@/utils/request'
import { GET_USER_INFO } from '../constant';
export function getUserInfo() {
  return async (dispatch) => {
    const res = await request('/user/profile')
    console.log(res);
    dispatch({
      type:GET_USER_INFO,
      payload:res.data.data
    })
    localStorage.setItem('userInfo',JSON.stringify(res.data.data))
  }
}
