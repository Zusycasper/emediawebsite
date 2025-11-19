//this prevent console.log in production
if (!window._consoleOverridden) {
  window._consoleOverridden = true;
  console.log = function() {};
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Helmet } from 'react-helmet';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* wrap around emedia biz JSON-LD schema markup */}
    {/* <Helmet> */}
    <App />
    {/* </Helmet> */}
  </StrictMode>,
)
