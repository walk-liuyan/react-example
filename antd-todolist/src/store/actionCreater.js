import * as types from './actionTypes'

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