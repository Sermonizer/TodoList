/*
 * @Author: your name
 * @Date: 2020-04-30 15:06:38
 * @LastEditTime: 2020-05-19 16:51:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React\todolist\src\component\AddTodo.js
 */
import React, { Component } from "react";

export default class AddTodo extends Component {
  handleClick = () => {
    this.props.addTodo(this.props.text);
  };

  handleChange = (e) => {  
    this.props.setTodoText(e.target.value);
  };

  render() {
    return (
      <div>
        <input value={this.props.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
