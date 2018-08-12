import React, { Component } from 'react'
import { connect } from 'react-redux'
// 无状态组件
const TodoList = (props) => {
    const { inputValue, handleClick, changeInputValue, handleDelete, list } = props
    return (
        <div>
            <div>
                <input
                  value={inputValue}
                  onChange={changeInputValue}
                />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index)=> {
                        return <li
                        onClick={
                            (e)=>{
                                handleDelete(index)
                            }}
                        key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
/*
class TodoList extends Component {
    render() {
        const { inputValue, handleClick, changeInputValue, handleDelete, list } = this.props
        return (
            <div>
                <div>
                    <input
                      value={inputValue}
                      onChange={changeInputValue}
                    />
                    <button onClick={handleClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index)=> {
                            return <li
                            onClick={
                                (e)=>{
                                    handleDelete(index)
                                }}
                            key={index}>{item}</li>
                        })
                    }
                    <li >DELL</li>
                </ul>
            </div>
        )
    }
} */
// mapStateToProps作为数据映射
const mapStateToProps = (state) => {
  return {
      inputValue: state.inputValue,
      list: state.list
  }
}
// store.dispatch ,props 把store.dispatch挂载到props 上
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e){
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        dispatch(action)
    },
    handleClick() {
        const action = {
            type: 'add_item'
        }
        dispatch(action)
    },
    handleDelete(index) {
        const action = {
            type: 'del_item',
            index
        }
        dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
// 与外部的父组件进行数据接收，connect(mapStateToProps, mapDispatchToProps)作为容器组件，TodoList无状态UI组件，暴露出去就是由映射工具+ui组成的东西