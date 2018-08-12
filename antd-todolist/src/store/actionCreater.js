import * as types from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: types.CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: types.ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: types.DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: types.INIT_LIST_ACTION,
    data
})

export const getInitList = () => ({
    type: types.GET_INIT_LIST,
})

// thunk 方法
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/todolist.json').then((res)=>{
            dispatch(initListAction(res.data))
        }).catch(()=>{
        })
    }
}