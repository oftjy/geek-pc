import { Layout, Menu, Popconfirm,message } from 'antd'
import { useEffect } from 'react'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
// 自己封装的组件
import ArticlePublish from '../ArticlePublish'
import ArticleList from '../ArticleList'
import Home from '../Home'
// css
import './index.module.scss'
import styles from './index.module.scss'
// 用到的插件
import { Switch, Route, Link, useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '@/store/actions/user'
import { logout } from "@/store/actions/login";
const { Header, Sider, Content } = Layout

const GeekLayout = () => {
  const history = useHistory()
  const location = useLocation()
  const selectedKey = location.pathname
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])
  const onConfirm = () => {
    // 清除token
    dispatch(logout())

    // 跳转到登录页
    history.push('/login')
    // 提示消息
    message.success('退出成功', 1)
  }
  return (
    <div className={styles.layout}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <div className="profile">
            <span className="user-name">{user.name}</span>
            <span className="user-logout">
              <Popconfirm
                title="是否确认退出？"
                okText="退出"
                cancelText="取消"
                placement="bottomRight"
                // placement作用：调整提示框的小箭头的方向
                onConfirm={onConfirm}
              >
                <LogoutOutlined /> 退出
              </Popconfirm>
            </span>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={[selectedKey]}
              // 高亮注意点：当使用defaultSelectedKeys的时候，使用面包屑路由跳转的时候，也就是在一个页面进行link跳转的时候，会发生高亮失效的情况，
              // 原因：defaultSelectedKeys是组件重新渲染的时候才触发，当进行link跳转的时候，没有进行组件重新渲染，所以，需要进行SelectedKeys模式的高亮，此模式高亮，会监听当前的的key值变化，并改变高亮
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item icon={<HomeOutlined />} key="home">
                <Link to="/home">数据概览</Link>内容管理
              </Menu.Item>
              <Menu.Item icon={<DiffOutlined />} key="/home/list">
                <Link to="/home/list">内容管理</Link>
              </Menu.Item>
              <Menu.Item icon={<EditOutlined />} key="/home/publish">
                <Link to="/home/publish">发布文章</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="layout-content" style={{ padding: 20 }}>
            <Content>
              <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/home/list" component={ArticleList}></Route>
                {/* 新增的路由 */}
                <Route
                  exact
                  path="/home/publish"
                  key="add"
                  component={ArticlePublish}
                ></Route>
                {/* 修改的路由 */}
                <Route
                  exact
                  path="/home/publish:id"
                  key="edit"
                  component={ArticlePublish}
                ></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default GeekLayout
