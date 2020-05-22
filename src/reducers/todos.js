/*
 * @Author: your name
 * @Date: 2020-05-03 08:55:19
 * @LastEditTime: 2020-05-21 16:23:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todolist\src\reducers\todos.js
 */

import {
  ADD_TODO,
  TOOGLE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "../actions/actionTypes";
import Immutable from "immutable";

const initialState = {
  // 标志是否被请求
  isFetching: false,
  // 标识请求是否有错
  error: null,
  // 放置原有的todos数据
  data: [],
};

const reducer = (state = Immutable.fromJS(initialState), action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return state.set("isFetching", true);
    case FETCH_TODOS_SUCCESS:
      return state.merge({
        isFetching: false,
        data: Immutable.fromJS(action.data),
      });
    case FETCH_TODOS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    default:
      const data = state.get("data");
      return state.set("data", todos(data, action));
  }
};

// 拆分后的子reducer，负责data的状态
const todos = (state = Immutable.fromJS([]), action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = Immutable.fromJS({
        id: action.id,
        text: action.text,
        completed: false,
      });
      // Immutable的list.push 返回新的不可变对象
      return state.push(newTodo);
    case TOOGLE_TODO:
      return state.map((todo) =>
        todo.get("id") === action.id
          ? todo.set("completed", !todo.get("completed"))
          : todo
      );
    default:
      return state;
  }
};

export default reducer;
