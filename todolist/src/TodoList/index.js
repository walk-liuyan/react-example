import React, { Component, Fragment } from 'react'
import TodoItem from '../TodoItem'
import Test from '../Test'
import axios from 'axios'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleItemDel = this.handleItemDel.bind(this)
    }
    // 在组件即将被挂在到页面的时刻自动执行
    componentWillMount() {
        console.log('在组件即将被挂在到页面的时刻自动执行， 只有在第一次被挂载时加载')
    }
    // 组件被挂在到页面后 自动被执行
    componentDidMount() {
        console.log('组件被挂在到页面后 自动被执行  只有在第一次被挂载时加载')
        // ajax
        axios.get('/api/todolist').then((result) => {
            this.setState(() => ({
                list: [...result.data]
            }))
        }).catch((err) => {

        });
    }
    // 组件被更新之前 自动被执行
    shouldComponentUpdate(nextProps, nextState) {
        // 必须返回bool 判断是否需要更新（true false）
        console.log('shouldComponentUpdate')
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return true
        }
    }

    // 组件被更新以前，他会自动执行，但是他在shouldComponentUpdate之后执行
    // 如果shouldComponentUpdate 返回true ，她才执行，反之 不执行
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    // 组件更新完成之后
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    // 组件没有props，则没有componentWillReceiveProps
    // 相当于他存在于子组件

    // 当自组建从父组件接受参数
    // 如果这个组件第一次存在于父组件，不会执行
    // 如果这个组件之前已经存在于伏组件，才会执行
    componentWillReceiveProps() {

    }
    // 把组件从页面去除
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
        return (
            <Fragment>
            <div>
                <input
                  value={this.state.inputValue }
                  onChange={this.handleInputChange}
                  ref={(input) => {this.input = input}}
                />
                <button
                onClick={this.handleButtonClick}
                >提交</button>
            </div>
            <ul ref={(ul) => {this.ul = ul}}>
                {
                   this.getTodoItem()
                }
            </ul>
            {/*
              1、inputValue在变化content会跟着一起变，render一起刷新 ，
              2、 父组件的render执行后，子组件的render也被执行
             */}
            <Test content={this.state.inputValue}></Test>
            </Fragment>
        )
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem key={index} content={item} index={index} deleteItem={this.handleItemDel}/>
            )
        })
    }
    handleInputChange (e) {
        const inputValue = this.input.value
        this.setState(()=>({
            inputValue
        }))
        // ()=>{{ //相当于retuen xxx; }} 异步
    }
    handleButtonClick () {
        this.setState((prevState)=>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {
            // setState 的 回调函数
            console.log(this.ul.querySelectorAll('div').length)
        })
        console.log(this.ul.querySelectorAll('div').length)// setstate 是异步，并不会得出你想要的结果，那么就setstate有第二个参数
/*         this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }) */
    }
    handleItemDel (index) {
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index, 1)
            return {
                list
            }
        })
    }
}

export default TodoList