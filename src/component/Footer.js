/*
 * @Author: your name
 * @Date: 2020-04-30 15:06:51
 * @LastEditTime: 2020-05-18 21:33:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \React\todolist\src\component\Footer.js
 */
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const { filter, setFilter: setVisbilityFilter } = this.props;
    return (
      <div>
        <span>Show:</span>
        <button
          onClick={() => setVisbilityFilter("all")}
          disabled={filter === "all"}
        >
          All
        </button>
        <button
          onClick={() => setVisbilityFilter("completed")}
          disabled={filter === "completed"}
        >
          Completed
        </button>
        <button
          onClick={() => setVisbilityFilter("active")}
          disabled={filter === "active"}
        >
          Active
        </button>
      </div>
    );
  }
}
