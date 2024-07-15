import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const TryOnPage = () => {
    const title = useParams().title;
    // Render the try-on page content here
    return (
      <div>
        <h1>Try On: {title}</h1>
        
      </div>
    );
  }

  export default TryOnPage;