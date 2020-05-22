/*
 * @Author: your name
 * @Date: 2020-05-03 09:33:23
 * @LastEditTime: 2020-05-03 14:54:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todolist\src\store.js
 */
import { createStore } from "redux";
import rootReducer from "./reducers";
import { addTodo, toogleTodo, setFilter, setTodoText } from "./actions";

// 创建store
const store = createStore(rootReducer);

// 打印初始化state
console.log(store.getState());
// console.log(1);


// 订阅state的变化 
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// 发送动作
store.dispatch(addTodo("看书"));
store.dispatch(toogleTodo(0));
store.dispatch(setFilter("active"));
store.dispatch(setTodoText("666"));

// 取消订阅
unsubscribe();
