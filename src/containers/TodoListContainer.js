/*
 * @Author: your name
 * @Date: 2020-05-14 16:00:02
 * @LastEditTime: 2020-05-22 10:14:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React\todolist\src\containers\TodoListCOntainer.js
 */

import { connect } from "react-redux";
import { toogleTodo, fetchTodos } from "../actions";
import TodoList from "../component/TodoList";
import { getVisibleTodos } from "../selectors";
import { toJS } from "../HOCs/toJS";

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  toogleTodo: (id) => dispatch(toogleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos()),
});
//  connect函数的返回值也是一个函数，接受要连接的组件作为参数
export default connect(mapStateToProps, mapDispatchToProps)(toJS(TodoList));
