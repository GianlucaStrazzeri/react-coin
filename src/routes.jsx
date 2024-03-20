import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'; //importo reactdom
import App from './App.jsx'; //import app para hacer el enrutamiento

//Me conecto al Dom de Ream creo un enrutamiento enlazandome al html, seleccionando el id root, y reenderizo la forma estricta de react (que me obligará a clean code) y App donde están las rutas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);