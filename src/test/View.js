import React, { Component } from 'react'
// import PropTypes from 'prop-types';

import List from './List'
import Item from './Item'

let list =  ['A','B','C'];

let counter=0;

export default class View extends Component {

    static propTypes = {
    }

    constructor(){
      super();
    // 获取文本框中的value值
    //初始化一个内部状态，因为这状态不需要每次传到父组件，
    //所以使用内部的状态
      this.state = {
        list: list
      }
      console.log('View 构造方法已调用');
    }

    click2(){
      console.log('父组件的方法')
    } 

    updateList() {
      console.log('updateList')
        this.setState((prevState) => {
          return {  
            list: ['A'+counter++,'B'+counter,'C'+counter,'D'+counter]
          };
        });
    }

    componentWillMount(){
      console.log('View 组件挂载之前');
    }
    componentDidMount(){
      console.log('View 组件挂载完成 AJAX请求');
    }

    shouldComponentUpdate(nextProps,nextState){
      console.log('View 组件更新优化');
      return true;
    }

    componentWillUpdate(){
      console.log('View 组件更新之前');
    }
    componentDidUpdate(){
      console.log('View 组件更新完成 可进行AJAX请求');
    }

    componentWillUnmount(){
      console.log('View 组件已卸载');
    }


  render() {
    return (
      <div>
        <button onClick={this.updateList.bind(this)}>改变List数组</button>
         <List>
           {this.state.list.map(text=>{
              return <Item text={text} onClick={this.click2} key={text}></Item>
           })}
         </List>
      </div>
    )
  }
}
