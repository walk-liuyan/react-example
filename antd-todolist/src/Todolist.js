import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import * as types from './store/actionTypes'
import * as actions from './store/actionCreater'
import TodoListUI from './TodoListUI'
import axios from 'axios'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClik = this.handleBtnClik.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        // 只要store里state改变，那么会自动执行回调函数 handleStoreChange
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <TodoListUI
              inputValue={this.state.inputValue}
              handleInputChange = {this.handleInputChange}
              handleBtnClik = {this.handleBtnClik}
              list = {this.state.list}
              handleItemDelete = {this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        // saga 方法
        const action = actions.getInitList()
        console.log('action', action)
        store.dispatch(action)

       /*  axios.get('/list.json').then((res)=>{
            store.dispatch(actions.initListAction(res.data))
        }).catch(()=>{
        }) */
        // 因为用了中间件，导致dispatch里可以放函数，自动去执行
        /*
        thunk 用法
        store.dispatch(actions.getTodoList())
        */
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
