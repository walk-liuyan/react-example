import * as types from './actionTypes'

// 存储的数据
const defaultState = {
    inputValue: '',
    list: ['1', '122']
}
// reducer 可以接受state，但不能修改state
export default (state = defaultState, action) => {
    if (action.type === types.GET_INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    if (action.type === types.INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    if (action.type === types.CHANGE_INPUT_VALUE) {
        // 深拷贝 Json.parse(Json.stringify(state))
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }
    if (action.type === types.ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        return newState
    }
    if (action.type = types.DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
    }
    return state;
}

// 不是reducer改变了state 中的数据，是store自己return出数据，改变了自己的数据
// reducer 不能有ajax 和 new date() 之类的操作