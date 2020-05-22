/*
 * @Author: your name
 * @Date: 2020-05-03 08:55:26
 * @LastEditTime: 2020-05-18 20:20:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todolist\src\reducers\text.js
 */

import { SET_TODO_TEXT } from "../actions/actionTypes";

const text = (state = "", action) => {
  switch (action.type) {
    case SET_TODO_TEXT:
      return action.text;
    default:
      return state;
  }
};

export default text;
