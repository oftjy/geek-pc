import { Route, Redirect, useLocation } from 'react-router-dom'
import { isAuth } from '@/utils/token'

// 简历上可写的一点项目点：封装鉴权路由组件，并将此组件代替常规的Route路由组件，达到判断用户是否登录的效果
// 面试官可能会问：为什么要封装这个组件
// 答：
// 原因：常规的响应拦截器在token失效之后，会进行页面的跳转，这种会发生用户退出了，然后直接经过url来进入页面的话，会发现首页的页面闪一下，然后退出来的效果。可能会造成用户信息的泄露。
// 解决办法：为了不让页面跳转到首页发完请求然后退出，直接利用route 组件内部可以使用render函数的特点，在这个函数里面写逻辑，如果没有token，或者token失效，直接不渲染对应的组件。

// 项目点2：优化鉴权组件，使用鉴权组件的路由可以实现token失效，用户再次登录，直接返回用户刚才浏览的页面的效果
// 面试官可能会问：怎么实现的？e
// 做法：
// 1.在鉴权组件的内部，有一个redirect组件，这个组件专门负责重定向的，
// 2.同时，可以在组件内部写上  to={{pathname：'路径'}} 的形式，在这个对象内部可以存储当前组件的路径，
// 3.当退出到登录页的时候，可将储存的路径传递给登录页面，
// 4.然后在登录页面获取这个路径，并在登录的逻辑加以判断，
// 5.如果有这个储存的路径，就直接跳转到这个储存路径，如果没有就是原来的主页

const AuthRoute = ({ component: Component, ...rest }) => {
  const location = useLocation()
  return (
    <Route
      {...rest}
      render={(props) => {
        // console.log(location)
        // 判断是否登录
        if (!isAuth()) {
          // 未登录
          return (
            <Redirect
              to={{
                pathname: '/login',
                state:{
                  from: location.pathname,
                }
              }}
            />
          )
        }

        // 登录
        return <Component {...props} />
      }}
    />
  )
}

export { AuthRoute }
