import React from 'react';

import { Simple, Simple2 } from './LearnElements';
import './Learn.css';

function Learn() {
  return (
    // CSS stylesheets
    <div className='simple'>
      <h1 className='text'>Hello</h1>

    {/* CSS in JS - Styled Components */}
      <Simple />
    
    {/* Conditional Rendering, 2 Options */}
    {false && (
      <Simple2 />
    )}
      
    {true ? <Simple2 /> : null}

    </div>
  )
}

export default Learn;

