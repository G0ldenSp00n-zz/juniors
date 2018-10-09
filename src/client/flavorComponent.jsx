import React from 'react';

const FlavorComponent = (props) => {
  return (
    <div id="flavorComponent">
      <p><span id='bold'>Flavor:</span> {props.flavor} </p>
      <p><span id='bold'>Likes:</span> {props.likes}</p>
      <button onClick={props.likeFlavor}>Like</button>
    </div>

  )
}

export default FlavorComponent;