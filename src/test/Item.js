import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Item extends Component {

    static propTypes = {
        text:PropTypes.string.isRequired,
        onClick : PropTypes.func
    }

    click(){
        console.log('组建自身的方法');
    }

    componentWillMount(){
      console.log('Item 组件挂载之前');
    }

    componentWillUnmount(){
      console.log('Item 组件已卸载');
    }


  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.props.text} . <button onClick={this.click}>查看</button>
        <hr/>
      </div>
    )
  }
}
