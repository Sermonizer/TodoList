/* eslint-disable no-unused-expressions */
/*
 * @Author: your name
 * @Date: 2020-05-02 17:01:07
 * @LastEditTime: 2020-05-21 16:50:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todolist\src\reducers\index.js
 */

import todos from "./todos";
import filter from "./filter";
import text from "./text";
// redux-immutable库的combineReducers函数才能识别不可变类型的对象
import { combineReducers } from "redux-immutable";

export default combineReducers({
  todos,
  text,
  filter,
});
