import React from 'react';
import CSSModules from 'react-css-modules';
import style from './icons.css';
import './icons.svg';

const Icon = ({name, fill}) => (
  <svg styleName={`icon-${name}`} fill={fill || '#000'}>
    <use xlinkHref={`#icons_${name}`} />
  </svg>
)

export default CSSModules(Icon, style, {allowMultiple: true});