import React, { Component, PropTypes } from 'react';

export default class Child extends Component {

  static get propTypes() {
    return {};
  }

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Child#componentDidUpdate');
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.prop !== this.props.prop;
  }

  render() {
    return <div></div>;
  }

}
