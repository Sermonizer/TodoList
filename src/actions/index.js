/*
 * @Author: Teng xu
 * @Date: 2020-05-02 09:51:51
 * @LastEditTime: 2020-05-19 21:03:42
 * @LastEditors: Please set LastEditors
 * @Description: 实现所有action项的定义
 * @FilePath: \todolist\src\actions\index.js
 */
import {
  ADD_TODO,
  TOOGLE_TODO,
  SET_FILTER,
  SET_TODO_TEXT,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "./actionTypes";

let newTodoId = 0;

/**
 * 同步action
 */
const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

const fetchTodosSuccess = (data) => ({
  type: FETCH_TODOS_SUCCESS,
  data,
});

const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  error,
});

/**
 * 异步action的调用
 * store默认接收对象，因此需要将返回的函数转换为对象，就用的到中间件redux-thunk来做这件事
 */
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    return fetch("./mock/todos.json").then(
      (response) => {
        response.json().then((data) => {
          dispatch(fetchTodosSuccess(data));
        });
      },  
      (error) => {
        dispatch(fetchTodosFailure(error));
        console.log("An error occured" + error);
      }
    );
  };
};
// 使用actioncreator来创建action
/**
 * @description: 新增待办事项
 * @param {type} text
 * @return:
 */
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: ++newTodoId,
  text,
});

/**
 * @description: 更改待办事项状态
 * @param {type} id
 * @return:
 */
export const toogleTodo = (id) => ({
  type: TOOGLE_TODO,
  id,
});

/**
 * @description: 设置过滤状态
 * @param {type} filter
 * @return:
 */
export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

/**
 * @description: 设置新增todo的文本信息
 * @param {type} text
 * @return:
 */
export const setTodoText = (text) => ({
  type: SET_TODO_TEXT,
  text,
});
