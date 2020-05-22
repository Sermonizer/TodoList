/*
 * @Author: your name
 * @Date: 2020-04-30 15:04:03
 * @LastEditTime: 2020-05-19 16:24:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React\todolist\src\component\App.js
 */
import React, { Component } from "react";
import AddTodoContainer from "../containers/AddTodoContainer";
import TodoListContainer from "../containers/TodoListContainer";
import FooterContainer from "../containers/FooterContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodoContainer />
        <TodoListContainer />
        <FooterContainer />
      </div>
    );
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: [],
  //     filter: "all",
  //   };
  //   this.newAddId = 0;
  //   this.getVisableTodo = this.getVisableTodo.bind(this);
  //   this.addTodo = this.addTodo.bind(this);
  //   this.toogleTodo = this.toogleTodo.bind(this);
  //   this.setVisbilityFilter = this.setVisbilityFilter.bind(this);
  // }

  // getVisableTodo = () => {
  //   const currentFilter = this.state.filter;
  //   return this.state.todos.filter((item) => {
  //     if (currentFilter === "all") {
  //       return true;
  //     } else if (currentFilter === "completed") {
  //       return item.completed;
  //     } else {
  //       return !item.completed;
  //     }
  //   });
  // };

  // addTodo = (text) => {
  //   const todo = {
  //     id: this.newAddId++,
  //     text,
  //     completed: false,
  //   };
  //   const newTodos = [todo, ...this.state.todos];
  //   this.setState({
  //     todos: newTodos,
  //   });
  // };

  // // 更改待办事项的状态
  // toogleTodo = (id) => {
  //   const newTodos = this.state.todos.map((item) => {
  //     return item.id === id ? { ...item, completed: !item.completed } : item;
  //   });
  //   this.setState({
  //     todos: newTodos,
  //   });
  // };

  // // 根据筛选条件更改列表
  // setVisbilityFilter = (filter) => {
  //   this.setState({
  //     filter,
  //   });
  // };
}
