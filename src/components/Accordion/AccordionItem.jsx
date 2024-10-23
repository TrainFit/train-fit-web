import React, { useState, useRef, useEffect } from 'react';
import './Accordion.css';

const AccordionItem = ({ title, content , isOpen, onToggle}) => {
  
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');


  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-title" onClick={onToggle}>
        <h5>{title}</h5>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
