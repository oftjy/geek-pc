import {
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import history from "@/utils/history";
// 导入页面组件
import Login from './pages/Login'
import Layout from './pages/Layout'
import { AuthRoute } from '@/components/AuthRoute'
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <AuthRoute path="/home" component={Layout}></AuthRoute>
          {/* <Route path="/home" component={Layout}></Route> */}
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
