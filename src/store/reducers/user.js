import { GET_USER_INFO } from '../constant'
export default function user(state = JSON.parse(localStorage.getItem('getUserInfo'))||{}, action) {
  if (action.type === GET_USER_INFO) {
    return action.payload
  }
  return state
}
