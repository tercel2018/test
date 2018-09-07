import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Item extends Component {
    static propTypes  = {
        text:PropTypes.string.isRequired,
        onClick :PropTypes.func
    }

  render() {
    return (
      <div onClick = {this.props.onClick}>
        {this.props.text}. <button onClick = {this.click}>查看</button>
      </div>
    )
  }
}
