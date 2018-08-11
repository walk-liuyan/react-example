import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
class TodoList extends Component {
    render() {
        return (
            <div style={{padding: '10px'}}>
                <Input placeholder="todo info"/><Button>submit</Button>
                <List
                  bordered
                  dataSource={data}
                  renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}
export default TodoList