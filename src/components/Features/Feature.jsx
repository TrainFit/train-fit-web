import React from 'react';
import './Features.css';
function Feature({ title, description }) {
  return (
    <div className="feature">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
