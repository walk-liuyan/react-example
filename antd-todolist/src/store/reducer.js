import * as types from './actionTypes'

// 存储的数据
const defaultState = {
    inputValue: '',
    list: ['1', '122']
}
// reducer 可以接受state，但不能修改state
export default (state = defaultState, action) => {
    if(action.type === types.CHANGE_INPUT_VALUE) {
        // 深拷贝 Json.parse(Json.stringify(state))
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }
    if(action.type === types.ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        return newState
    }
    if(action.type = types.DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
    }
    return state;
}

