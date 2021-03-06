import React, { Component } from 'react'
import { Card, Breadcrumb, Form, Button, Radio, Select, DatePicker } from 'antd'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
const { RangePicker } = DatePicker
export default class ArticleList extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Card
          title={
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/home">首页</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>文章列表</Breadcrumb.Item>
            </Breadcrumb>
          }
        >
          <Form initialValues={{ status: -1 }}>
            <Form.Item label="状态" name="status">
              <Radio.Group>
                <Radio value={-1}>全部</Radio>
                <Radio value={0}>草稿</Radio>
                <Radio value={1}>待审核</Radio>
                <Radio value={2}>审核通过</Radio>
                <Radio value={3}>审核失败</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="频道" name="password">
              <Select placeholder="请选择频道" style={{ width: 200 }}>
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="Yiminghe">yiminghe</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="日期">
              <RangePicker></RangePicker>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                筛选
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
