import React from 'react';
import ReactDOM from 'react-dom/client';
import Block1 from './Block1';
import Block2 from './Block2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Block1 />
    <Block2 />
  </React.StrictMode>
);
