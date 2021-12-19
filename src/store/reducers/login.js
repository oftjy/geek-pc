import { LOGIN, LOGOUT } from '../constant'
const initialState = {
  token:''
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      }
    case LOGOUT:
      return {
        ...state,
        token:''
      }
    default:
      return state
  }
}

export default login
