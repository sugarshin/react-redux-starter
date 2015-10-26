import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Child from '../components/Child';
import * as actions from '../actions';

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  render() {
    const { prop, actions } = this.props;

    return (
      <div className="app">
        <Child prop={prop} actions={actions} />
      </div>
    );
  }
}
