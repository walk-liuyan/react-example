import {
    takeEvery,
    put
} from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actionCreater from './actionCreater'

import axios from 'axios'

function* getInitList() {
    // saga 没有store的概念，取而代之put
    try {
        const res = yield axios.get('http://localhost:5000/todolist.json')
        const actions = actionCreater.initListAction(res.data)
        yield put(actions)
    } catch (e) {
        console.log('err', e)
    }
}

// generator 函数
// 我要接收到名为types.GET_INIT_LIST 的方法
function* mySaga() {
    yield takeEvery(types.GET_INIT_LIST, getInitList)
}

export default mySaga;