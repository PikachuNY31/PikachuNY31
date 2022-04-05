import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Banner(props) {

  return (
    <div class="banner">
      <h4 class="banner-message">
          {props.storePrompt}
      </h4>
    </div>
  )
}

export default Banner;