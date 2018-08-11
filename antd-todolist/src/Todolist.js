import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import * as types from './store/actionTypes'
import * as actions from './store/actionCreater'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClik = this.handleBtnClik.bind(this)
        // 只要store里state改变，那么会自动执行handleStoreChange
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <div style={{padding: '10px'}}>
                <Input value={this.state.inputValue}
                 placeholder="todo info"
                 onChange={this.handleInputChange}/>
                <Button onClick={this.handleBtnClik}>submit</Button>
                <List
                  bordered
                  dataSource={this.state.list}
                  renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
        )
    }

    handleStoreChange() {
    // 当发现store state 发生改变, 调用store里的数据 getState() 替换组件里的数据
        this.setState(store.getState())
    }

    handleInputChange(e) {
        store.dispatch(actions.getInputChangeAction(e.target.value))
    }
    handleBtnClik() {
        store.dispatch(actions.getAddItemAction())
    }
    handleItemDelete(index) {
        store.dispatch(actions.getDeleteItemAction(index))
    }
}
export default TodoList