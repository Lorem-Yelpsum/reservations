import React from 'react';
import './icons.svg';

const Icon = ({name, width, height, fill}) => (
  <svg width={width} height={height} fill={fill || '#000'}>
    <use xlinkHref={`#icons_${name}`} />
  </svg>
)

export default Icon;