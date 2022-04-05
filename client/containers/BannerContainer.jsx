import React from 'react';

function BannerContainer(props) {

  return (
    <div class="banner-container">
      <h4 class="banner-message">
          <span class="message">{props.storePrompt}</span>
      </h4>
    </div>
  )
}

export default BannerContainer;