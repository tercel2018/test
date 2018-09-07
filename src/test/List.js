import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class List extends Component {

    static propTypes = {
    }

  render() {
    return (
      <div>
        <div>列表:</div>
        {this.props.children}
      </div>
    )
  }
}
