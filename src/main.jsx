// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";

import '@fontsource-variable/roboto-slab';
import '@fontsource-variable/open-sans';

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot instead of render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

