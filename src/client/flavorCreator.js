import React from 'react';

const FlavorCreator = (props) => {
  return (
    <div id="flavorComponent">
      <input  placeholder={'Flavor'} onChange={props.newFlavor}></input>
      <button onClick={props.postFlavor}>Submit</button>
    </div>

  )
}

export default FlavorCreator;