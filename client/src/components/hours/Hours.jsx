import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './hours.css';

class Hours extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="biz-hours">
        <h3 styleName="biz-hours">Hours</h3>
      </div>
    );
  }
}

export default CSSModules(Hours, style, {allowMultiple: true});