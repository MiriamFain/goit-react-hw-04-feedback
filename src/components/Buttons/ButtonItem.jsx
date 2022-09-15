import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ButtonItem.module.css';

export default class ButtonItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <li>
        <button
          className={s.btn}
          name={this.props.name}
          onClick={this.props.onLeaveFeedback}
        >
          {this.props.text}
        </button>
      </li>
    );
  }
}
