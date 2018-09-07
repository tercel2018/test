import React, { Component } from 'react'
import List from './List'
import Item from './Item'

let list = ['a','b','sa b'];
export default class view extends Component {
  static propTypes = {}
  constructor(){
    super();
    this.state ={
      list:list
    }
  }
  click2(){

  }
  updateList(){
    this.setState((prevState)=>{
      return {
        list:['aa','bb','cc']
      }
    })
  }

  render() {
    return (
      <div>
        <List>
          <button onClick= {this.updateList.bind(this)}>改变值</button>
           {this.state.list.map(text=>{
            return <Item text={text} onClick ={this.click2} key= {text}></Item>
          })}
        </List>
      </div>
    )
  }
}
