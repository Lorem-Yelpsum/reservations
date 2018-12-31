import React from 'react';

const PeoplePicker = ({max_party, handlePeoplePicker}) => {
  let party_sizes = Array.from(new Array(13),(val,index)=>index+2);
  let options = party_sizes.map((size, idx) => {
    return <option key={idx} value={size}>{`${size} people`}</option>
  });

  return (
    <select onChange={handlePeoplePicker}>
      {options}
    </select>
  );
}

export default PeoplePicker;