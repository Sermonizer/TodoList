/*
 * @Author: your name
 * @Date: 2020-05-21 11:06:17
 * @LastEditTime: 2020-05-22 10:34:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todo\src\selectors\index.js
 */

import { createSelector } from "reselect";

export const getText = (state) => state.get("text");

export const getFilter = (state) => state.get("filter");

export const getTodos = (state) => state.getIn(["todos", "data"]);

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    console.log('getVisibleTodos'); 
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((t) => !t.get("completed"));
      case "completed":
        return todos.filter((t) => t.get("completed"));
      default:
        return new Error("Unknown error" + filter);
    }
  }
);

// // 逐层获取属性，需要用getIn方法
// const data = state.getIn(["todos", "data"]);
// const filter = state.get("filter");
