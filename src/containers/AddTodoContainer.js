/*
 * @Author: your name
 * @Date: 2020-05-14 15:59:16
 * @LastEditTime: 2020-05-21 11:24:22
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \React\todolist\src\containers\AddTodoContainer.js
 */

import { connect } from "react-redux";
import { setTodoText, addTodo } from "../actions";
import AddTodo from "../component/AddTodo";
import { getText } from "../selectors";

const mapStateToProps = (state) => ({
  text: getText(state),
});

const mapDispatchToProps = (dispatch) => ({
  setTodoText: (text) => dispatch(setTodoText(text)),
  addTodo: (text) => dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
