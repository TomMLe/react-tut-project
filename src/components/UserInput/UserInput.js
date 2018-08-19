import React from 'react';
import './UserInput.css';

const uinput = (props) => {
  return (
      <input className="Input" type="text" onChange={props.changed} value={props.username}/>
  )
};

export default uinput;
