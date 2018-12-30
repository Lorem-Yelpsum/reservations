import React from 'react';
import CSSModules from 'react-css-modules';
import style from './icons.css';
import './icons.svg';

const Icon = (props) => (
  <svg styleName={`icon-${props.name}`}>
    <use xlinkHref={`#icons_${props.name}`} />
  </svg>
)

export default CSSModules(Icon, style, {allowMultiple: true});