import React from 'react';
import ReactDOM from 'react-dom/client';
import CatPassportGenerator from './CatPassportGenerator';
import './index.css'; // если файла нет — убери эту строку

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CatPassportGenerator />
  </React.StrictMode>
);
