import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComB extends Component {
    render() {
        return(
        <div>{this.props.count}</div>
        )
    }
}
// 接受两个参数 
const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps)(ComB);