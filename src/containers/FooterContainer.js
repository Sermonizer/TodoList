/*
 * @Author: your name
 * @Date: 2020-05-14 15:59:43
 * @LastEditTime: 2020-05-21 11:21:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React\todolist\src\containers\FooterContainer.js
 */

import { connect } from "react-redux";
import { setFilter } from "../actions";
import Footer from "../component/Footer";
import { getFilter } from "../selectors";

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
