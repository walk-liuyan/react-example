import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
    constructor(props) {
        super(props)
        // state 改变，就会触发render
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        const { content } = this.props
        return (
            <div onClick={this.handleClick}>{content}</div>
        )
    }
    handleClick() {
        const {deleteItem , index} = this.props
        console.log(this.props.index)
        deleteItem(index)
    }
}
// 控制传参类型
// content: PropTypes.string,
// content 可以是number／string
/* TodoItem.PropTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
} */
// 传参类型
TodoItem.defaultProps = {
    test: 'hello world'
}
export default TodoItem