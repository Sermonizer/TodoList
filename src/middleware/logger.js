/*
 * @Author: your name
 * @Date: 2020-05-21 11:39:30
 * @LastEditTime: 2020-05-21 11:43:24
 * @LastEditors: Please set LastEditors
 * @Description: 打印action、action之后的state的中间件
 * @FilePath: \todo\src\middleware\logger.js
 */

const logger = ({ getState, dispatch }) => (next) => (action) => {
  console.group(action.type);
  console.log("dispatch", action);
  const result = next(action);
  console.log("new State: ", getState());
  console.groupEnd();
  return result;
};

export default logger;
