/*
 * @Author: your name
 * @Date: 2020-05-19 10:42:25
 * @LastEditTime: 2020-05-19 21:20:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todo\src\component\TodoList.js
 */

import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  // todoList挂载完成后，调用异步action，获取todolist的初始数据
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, toogleTodo } = this.props;
    return (
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => {
                toogleTodo(todo.id);
              }}
            />
          );
        })}
      </ul>
    );
  }
}
