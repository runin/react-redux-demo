import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComC extends Component{
    handClick = () => {
        this.props.sendAction();
    }

    render() {
        return(
            <button onClick={this.handClick}>-</button>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type: 'sub_action'
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(ComC)