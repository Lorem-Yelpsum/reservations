import React from 'react';
import './sidebar-icons.svg';

const Icon = ({name, width, height, fill}) => (
  <svg width={width} height={height} fill={fill || '#000'}>
    <use xlinkHref={`#sidebar-icons_${name}`} />
  </svg>
)

export default Icon;