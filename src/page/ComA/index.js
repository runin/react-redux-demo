import React, { Component } from 'react';
import { connect } from 'react-redux'

class ComA extends Component{
    handClick = () => {
        // 发送一个action
        this.props.sendAction();
    }

    render() {
        return(
            <button onClick={this.handClick}>+</button>
        )
    }
}


// 这个函数要有个返回值，返回值必须使对象
const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            // 利用dispatch发送一个action。传递action对象，我们要定义一个type属性
            dispatch({
                type: 'add_action'
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(ComA)