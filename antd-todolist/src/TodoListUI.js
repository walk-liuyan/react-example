import React from 'react'
import { Input, Button, List } from 'antd'
// 无状态组件，性能最优
const TodoListUI = (props) => {
    return (
        <div style={{padding: '10px'}}>
            <Input value={props.inputValue}
             placeholder="todo info"
             onChange={props.handleInputChange}/>
            <Button onClick={props.handleBtnClik}>submit</Button>
            <List
              bordered
              dataSource={props.list}
              renderItem={
                  (item, index) => (
                    <List.Item onClick={
                        (e)=>{
                            this.handleItemDelete(index)
                        }}>{item}
                    </List.Item>
                  )
              }
            />
        </div>
    )
}
// 普通组件
/* class TodoListUI extends Component {
    render() {
        return (
            <div style={{padding: '10px'}}>
                <Input value={this.props.inputValue}
                 placeholder="todo info"
                 onChange={this.props.handleInputChange}/>
                <Button onClick={this.props.handleBtnClik}>submit</Button>
                <List
                  bordered
                  dataSource={this.props.list}
                  renderItem={
                      (item, index) => (
                        <List.Item onClick={
                            (index)=>{
                                this.handleItemDelete(index)
                            }}>{item}
                        </List.Item>
                      )
                  }
                />
            </div>
        )
    }
} */
export default TodoListUI