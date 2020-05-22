/*
 * @Author: your name
 * @Date: 2020-05-03 08:55:23
 * @LastEditTime: 2020-05-03 10:03:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todolist\src\reducers\filter.js
 */

import { SET_FILTER } from "../actions/actionTypes";

const filter = (state = "all", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
