/*
 * @Author: your name
 * @Date: 2020-05-22 09:30:56
 * @LastEditTime: 2020-05-22 10:12:27
 * @LastEditors: Please set LastEditors
 * @Description: 完成Immutable对象到普通js对象的转化
 * @FilePath: \todo\src\HOCs\toJS.js
 */

import React from "react";
import { Iterable } from "immutable";

/**
 * 高阶组件是接收一个组件，返回一个新的组件的函数
 * WrappedComponent : 组件
 * wrappedComponentProps：组件的属性
 * Immutable数据的格式：data(list) => tail{array: Array()}
 *  => array[] => array[0]: Map => _root:{ArrayMapNode}
 *  => entries: [Array(),Array(),...] => Array(0): 0: ['id', 100], 1: ['text', 'react'], 2: ['completed', false]
 * KEY: 定义数组的第一个位置，VALUE：定义数组的第二个位置
 */
export const toJS = (WrappedComponent) => (wrappedComponentProps) => {
  const KEY = 0,
    VALUE = 1;
  const propsJS = Object.entries(wrappedComponentProps).reduce(
    (newProps, wrappedComponentProp) => {
      newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
        wrappedComponentProp[VALUE]
      )
        ? wrappedComponentProp[VALUE].toJS()
        : wrappedComponentProp[VALUE];
      return newProps;
    },
    {}
  );
  return <WrappedComponent {...propsJS} />;
};
