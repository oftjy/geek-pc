import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { getToken } from '@/utils'
const initialState = {
    // login: localStorage.getItem('itcast_geek_pc')
    login: getToken()
}
const middlewares = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(rootReducer,initialState, middlewares)

export default store